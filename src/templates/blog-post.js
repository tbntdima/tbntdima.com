/** @jsx jsx */
import { jsx, Flex, Heading, Text } from "theme-ui"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Bio from "../components/bio"

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
          mb: 4,
        }}
      >
        <Heading
          sx={{
            mb: 2,
            fontSize: [4, 5, 6],
            fontWeight: "bold",
          }}
        >
          {post.frontmatter.title}
        </Heading>

        <Text
          sx={{
            mb: 2,
            color: "primary",
          }}
        >
          {post.frontmatter.date} • {post.timeToRead} min read
        </Text>

        <Text
          as="p"
          sx={{
            mb: 2,
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
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      html
    }
  }
`
