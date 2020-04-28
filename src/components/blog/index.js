/** @jsx jsx */
import { jsx, Flex, Heading } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"
import Card from "./card"

const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                id
                timeToRead
                fields {
                  slug
                }
                frontmatter {
                  title

                  date(formatString: "MMMM DD, YYYY")
                  spoiler
                  heroImage {
                    childImageSharp {
                      fluid(maxWidth: 440, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
                html
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges: blogPosts } }) => (
        <section
          sx={{
            maxWidth: "920px",
            mx: "auto",
            pb: 5,
          }}
        >
          <Heading
            as="h2"
            sx={{
              mb: 4,
            }}
          >
            Blog
          </Heading>
          <Flex
            sx={{
              flexWrap: "wrap",
              justifyContent: ["center", "space-between"],
            }}
          >
            {blogPosts.map(({ node: post }) => (
              <Link
                key={post.id}
                to={post.fields.slug}
                title={post.frontmatter.title}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  width: ["100%", "49%"],
                  maxWidth: "440px",
                  mb: 4,
                }}
              >
                <Card post={post} />
              </Link>
            ))}
          </Flex>
        </section>
      )}
    />
  )
}

export default Blog
