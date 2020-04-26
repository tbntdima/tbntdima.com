/** @jsx jsx */
import { jsx, useColorMode, Flex, Heading, Text } from "theme-ui"
import Img from "gatsby-image"
import CoffeeIcon from "../../assets/images/svgs/coffee"

const Card = ({ post }) => {
  const [colorMode] = useColorMode()
  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "cardBackground",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow:
          colorMode === "light"
            ? "0px 4px 20px rgba(138, 149, 158, 0.15)"
            : "none",
      }}
    >
      <Img fluid={post.frontmatter.heroImage.childImageSharp.fluid} />
      <div
        sx={{
          p: 3,
          pb: "24px",
        }}
      >
        <Heading
          as="h3"
          sx={{
            mb: 2,
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
}

export default Card
