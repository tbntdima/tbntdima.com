/** @jsx jsx */
import { jsx, Flex, Heading, Text } from "theme-ui"
import Img from "gatsby-image"
import CoffeeIcon from "../../assets/images/svgs/coffee"

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
          display: "flex",
          alignItems: "center",
          mb: 3,
          color: "primary",
          fontSize: [1, 1, 2],
        }}
      >
        {post.frontmatter.date} • <CoffeeIcon sx={{ ml: 1 }} />
        {post.timeToRead} min read
      </Text>
      <Text as="p">{post.frontmatter.spoiler}</Text>
    </div>
  </Flex>
)

export default Card
