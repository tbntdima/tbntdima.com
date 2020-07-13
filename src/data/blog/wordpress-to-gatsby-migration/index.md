---
title: WordPress to Gatsby migration, keeping WordPress as CMS
date: "2020-07-14"
spoiler: Here I will share my experience with how I migrated a news website (with ~200 posts) from WordPress to Gatsby, keeping WordPress as CMS.
heroImage: "./hero.jpg"
---

Note: This article is not intended to be a tutorial, I just want to share major difficulties I faced during migration, and solutions I came up with.

## Overview

### Backstory

My friend is running a news website about school education - [Peremena.media](https://peremena.media).

- The website is around 2 years old.

- It has around 200 posts.

- Built on WordPress with a custom theme.

- 3 people (with no knowledge of code) are managing the content.

- Content is added via [Visual Composer](https://visualcomposer.com/).

  > Visual Composer Website Builder is a WordPress plugin that allows building any website layout fast and easy. It replaces the classic WordPress editor with an intuitive frontend drag and drop interface.
  >
  > [visualcomposer.com](https://visualcomposer.com/what-is-visual-composer-website-builder/)

### Requirements

- Migrate website to Gatsby.

- Apply a new design.

- Keep WordPress as a CMS.

- Be able to filter posts by views count.

### Difficulties

- [Handling Shortcodes](#handling-shortcodes).

- [Handling Images](#handling-images).

- [Adding page views count and other server functionality](#adding-page-views-count-and-other-server-functionality).

---

## Handling Shortcodes

The first issue I faced was WordPress shortcodes.

> In a nutshell, a [shortcode](https://codex.wordpress.org/Shortcode) is a small piece of code, indicated by brackets like [this], that performs a dedicated function on your site. You can place it just about anywhere you’d like, and it will add a specific feature to your page, post, or other content. For example, you can use shortcodes to display galleries, videos, or even playlists.
>
> [JOHN HUGHES](https://themeisle.com/blog/what-are-shortcodes-in-wordpress/)

When I received a `content` in Gatsby it looked something like this:

```no
[vc_row]
  [vc_column]
    [vc_column_text]
      <strong>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        [vc_single_image image="5249" img_size="200x200" alignment="center"]
      </strong>
    [/vc_column_text]
  [/vc_column]
[/vc_row]
```

I figured out 2 ways to handle shortcodes:

- [On front end](#front-end).

- [On back end](#back-end).

### Front end

My initial thought was just to use regular expression and remove all the shortcodes.

I managed to do so, but a lot of valuable content got lost. For example, all the links and some images on the posts are created via shortcodes like this one:

```md
[vc_link source="" link="" relative="" external=""...]
```

So that option didn't work out.

The second thought was to map all shortcodes to react components. So this way I can bring links and images back. That sounded good to me and I gave it a try.

It appears that there was already a package that did the job - [wordpress-shortcode-functions-js](https://github.com/websterman/wordpress-shortcode-functions-js).

However, that package was a bit outdated and didn't support visual composer's _"closing"_ shortcodes, and a few other things. So I've [forked the repository](https://github.com/tbntdima/wordpress-shortcode-functions-js) and modified it to my needs, now it has wider support, more intuitive API, and cleaner documentation.

> You've might already notice that visual composer generates non-standard shortcodes, which look like HTML tags: `[vc_column][/vc_columns]`.

I think this approach is the best when you set up WordPress as CMS from scratch, and you have full control over shortcodes.

However when doing a migration of relatively big websites with a bunch of plugins and shortcodes, it would take a lot of time to map shortcodes with all possible parameters, so the [following approach](#back-end) (via back end) would be more suitable.

### Back end

Since I'm not a regular WordPress user, this idea came to my mind the last.

Gatsby is getting content from WordPress Rest API. And WordPress itself gives you full control over it.

What we can do is to execute all shortcodes on the server, and replace the original content.

We can achieve this by pasting below code into the theme's `functions.php`

```php
// theme's functions.php
add_action('rest_api_init', function() {
    register_rest_field('post', 'content', [
        'get_callback' => function($post) {
            $content = $post['content']['raw'];

            WPBMap::addAllMappedShortcodes();

            return do_shortcode(html_entity_decode($content));
        }
    ]);
});
```

This approach is also not ideal since it outputs unnecessary markup. However, I was satisfied with the outcome.

Here is the [example of the post](https://peremena.media/chto-vdohnovlyaet-bezumca-elon-musk/).

### Summary

In the end, we agreed to keep all previous posts as they are. And use classic WordPress editor instead of visual composer for the future posts.

And in case if content managers need a shortcode, it will be handled on [front end](#front-end).

---

## Handling Images

To source data from WordPress, I used [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) plugin v3.

Overall this is a very nice plugin to work with. It provided me with almost everything that I need.

The main issue is that it doesn't convert images into Gatsby-image in the posts yet (this is supposed to be added in [version 4](https://github.com/gatsbyjs/gatsby/issues/19292) of the plugin, but I don't know when it will be released).

There is a plugin [gatsby-wpgraphql-inline-images](https://www.gatsbyjs.org/packages/gatsby-wpgraphql-inline-images/), that should do the job. But it works only with [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/).

I spent a fair amount of time to tweak the plugin to make it work with `gatsby-source-WordPress`, here is the repository [tbntdima/gatsby-wpgraphql-inline-images](https://github.com/tbntdima/gatsby-wpgraphql-inline-images), with a readme file.

It's not perfect though, caching is not working well, which dramatically increase the build time. Any [contribution](https://github.com/tbntdima/gatsby-wpgraphql-inline-images) is welcome.

If you have any questions related to the tweaks, you can dm me on twitter [@tbnt_dima](https://twitter.com/tbnt_dima).

---

## Adding page views count and other server functionality

The most important requirement from my friend was to be able to display the view count of the posts and to have a list of top 5 or top 10 viewed posts.

This one is a bit tricky since we have to handle it both during the [build time](#build-time) and on the [client](#client).

### Build time

We can do the same thing as we did for the shortcode execution:

```php
// theme's functions.php
add_action('rest_api_init', function() {
    register_rest_field('post', 'view_count', [
        'get_callback' => function($post) {
            return (int) get_post_meta($post['id], 'views_count', true)
        }
    ]);
});
```

With the code above, `view_count` will become a normal post field as `title`, `content`, or `wordpress_id`.

### Client

Here we need two things:

- Be able to get the latest data

- Be able to update the data

For this, we can create our custom REST API endpoints with WordPress.

#### Get latest data

```php
// theme's functions.php
add_action('rest_api_init', 'register_get_posts_views');

function register_get_posts_views() {
    register_rest_route(
        'api/v1',
        'get-posts-views',
        [
            'method' => 'GET',
            'callback' => 'getPostsViews'
        ]
    );
}

function getPostsViews() {
    $posts = get_posts(['numberposts' => -1]);

    $postsWithViewCount = array_map(function($post) {
        return (object) [
            'id' => $post->ID,
            'viewCount' => (int) get_post_meta($post->ID, 'airkit_views', true),
        ];
    }, $posts);

    return new WP_REST_Response($postsWithViewCount, 200);
}
```

#### Update data

```php
// theme's functions.php
function updatePostViews($request) {
  $postID = $request['id'];
  $count = get_post_meta($postID, 'airkit_views', true);
  update_post_meta($postID, 'airkit_views', $count + 1);
  return new WP_REST_Response(null, 200);
}

add_action('rest_api_init', 'register_udpate_post_views');

function register_udpate_post_views() {
    register_rest_route(
        'api/v1',
        'update-post-views/(?P<id>\d+)',
        [
            'method' => 'PUT',
            'callback' => 'updatePostViews'
        ]
    );
}
```

In the end we will have two endpoints:

`https://(wordpress url)/wp-json/api/v1/get-posts-views`

`https://(wordpress url)/wp-json/api/v1/update-post-views/post-id`

You can add any functionality in the same way, you need to know at least some basics of WordPress and PHP though.

## Conclusion

In conclusion, I am pretty satisfied with the final result. There were no major issues, except the ones I described above.

Lighthouse performance increased dramatically, and the overall user experience is much better now.
You can check it out yourself. Here is an [old Wrodrpess version](http://tbnt.peremena.media/), and here is a [new Gatsby version](https://peremena.media/).

WordPress content managers can keep working as they used to. There is no need to modify already existed posts.

However the sate of current WordPress related Gatsby plugins is not the best, and most of them required manual tweaks.

Since media files are stored on the CMS server, they have to be downloaded during the build time. The caching problem is not solved yet, so the build time is quite long.

Hopefully, with the release of [gatsby-source-wordpress version 4](https://github.com/gatsbyjs/gatsby/issues/19292) most issues will be gone.
