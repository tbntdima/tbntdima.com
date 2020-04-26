/** @jsx jsx */
import { jsx, Flex, Heading, Text } from "theme-ui"
import Img from "gatsby-image"

const Card = ({ post }) => (
  <Flex
    sx={{
      flexDirection: "column",
      width: "100%",
      height: "100%",
      backgroundColor: "cardBackground",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    }}
  >
    <Img fluid={post.frontmatter.heroImage.childImageSharp.fluid} />
    <div
      sx={{
        p: 3,
      }}
    >
      <Heading
        as="h3"
        sx={{
          mb: 3,
          fontSize: 4,
        }}
      >
        {post.frontmatter.title}
      </Heading>
      <Text
        sx={{
          mb: 3,
          color: "primary",
        }}
      >
        {post.frontmatter.date} • {post.timeToRead} min read
      </Text>
      <Text as="p">{post.frontmatter.spoiler}</Text>
    </div>
  </Flex>
)

export default Card
