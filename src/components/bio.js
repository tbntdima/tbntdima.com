/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text } from "theme-ui"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import GithubButton from "./githubButton"
import TwitterButton from "./twitterButton"

const Bio = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          avatar: file(relativePath: { eq: "avatar.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 375, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={({ avatar }) => {
        return (
          <Flex
            as="section"
            sx={{
              flexDirection: ["column", "row"],
              maxWidth: 838,
              mx: "auto",
              py: 2,
            }}
          >
            <Box sx={{ flex: 1, width: ["100%", "200px"], mb: 3 }}>
              <Img
                fluid={avatar.childImageSharp.fluid}
                sx={{
                  width: ["200px", "250px", "300px"],
                  height: ["200px", "250px", "300px"],
                  borderRadius: "50%",
                  mx: "auto",
                }}
              />
            </Box>
            <Box
              sx={{
                width: ["100%", "calc(100% - 290px)", "calc(100% - 415px)"],
                maxWidth: ["343px", "436px"],
                mx: "auto",
              }}
            >
              <Text
                sx={{
                  mb: 1,
                  opacity: 0.5,
                  color: "text",
                  fotnFamily: "heading",
                  fontWeight: "body",
                  fontSize: 1,
                  letterSpacing: ".1px",
                }}
              >
                Personal website
              </Text>
              <Heading
                as="h1"
                sx={{
                  fontSize: 6,
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                <span
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    "::before": {
                      content: '""',
                      position: "absolute",
                      zIndex: 1,
                      top: "0",
                      left: "-10px",
                      width: "calc(100% + 20px)",
                      height: "100%",
                      backgroundColor: "primary",
                    },
                  }}
                >
                  <span
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      color: "textReverse",
                    }}
                  >
                    Dima An,
                  </span>
                </span>
                <br />
                frontend <br />
                developer
              </Heading>
              <Text
                as="p"
                sx={{
                  fontSize: 2,
                  lineHeight: "homeHeroText",
                  mb: 3,
                }}
              >
                I like building functional websites with data-driven, polished
                web and mobile interfaces. Now I'm keen on React and Gatsby.
              </Text>
              <Flex>
                <Box>
                  <GithubButton />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <TwitterButton />
                </Box>
              </Flex>
            </Box>
          </Flex>
        )
      }}
    />
  )
}

export default Bio
