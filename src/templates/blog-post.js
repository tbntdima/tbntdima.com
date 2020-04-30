/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text } from "theme-ui"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import CoffeeIcon from "../assets/images/svgs/coffee"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
      />
      <section
        sx={{
          maxWidth: "880px",
          mx: "auto",
          mb: 5,
        }}
      >
        <Link
          to="/"
          rel="home"
          title="homepage"
          sx={{
            variant: "links.secondary",
            mt: 3,
            mb: 4,
          }}
        >
          ← Homepage
        </Link>
        <Heading
          sx={{
            mb: 3,
            fontSize: [4, 5, 6],
            fontWeight: "bold",
          }}
        >
          {post.frontmatter.title}
        </Heading>

        <Text
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            color: "primary",
          }}
        >
          {post.frontmatter.date} • <CoffeeIcon sx={{ ml: 1 }} />
          {post.timeToRead} min read
        </Text>

        <Text
          as="p"
          sx={{
            mb: 3,
          }}
        >
          {post.frontmatter.spoiler}
        </Text>

        <Img
          fluid={post.frontmatter.heroImage.childImageSharp.fluid}
          sx={{
            maxWidth: "600px",
            borderRadius: "8px",
            mb: 4,
            boxShadow: "0px 2px 4px rgba(92, 99, 105, 0.15)",
          }}
        />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            mt: 5,
          }}
        >
          <Box>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                title={previous.frontmatter.title}
                sx={{
                  variant: "links.secondary",
                  width: "126px",
                  textDecoration: "none",
                }}
              >
                ← Previous
              </Link>
            )}
          </Box>
          {next && (
            <Link
              to={next.fields.slug}
              rel="next"
              title={next.frontmatter.title}
              sx={{
                variant: "links.secondary",
                width: "126px",
                textDecoration: "none",
              }}
            >
              Next →
            </Link>
          )}
        </Flex>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
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
`
