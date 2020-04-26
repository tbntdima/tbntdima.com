/** @jsx jsx */
import { jsx, useThemeUI, Flex, Box, Text, Link as ThemedLink } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"
import Logo from "../../../assets/images/svgs/logo"
import GatsbyLogo from "../../../assets/images/svgs/gatsbyLogo"
import NetlifyLogo from "../../../assets/images/svgs/netlifyLogo"
import { GrGithub, GrTwitter } from "react-icons/gr"

const Footer = () => {
  const { theme } = useThemeUI()

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              socials {
                github
                twitter
              }
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: {
            socials: { github: githubUrl, twitter: twitterUrl },
          },
        },
      }) => (
        <Box as="footer">
          <Box backgroundColor="darkBackground">
            <Flex
              sx={{
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "container",
                mx: "auto",
                px: 3,
                py: 3,
                color: "textReverse",
              }}
            >
              <Link to="/">
                <Logo />
              </Link>
              <Flex sx={{ alignItems: "center" }}>
                <ThemedLink
                  href={githubUrl}
                  target="_blank"
                  sx={{ display: "flex", color: "white" }}
                >
                  <GrGithub fontSize="30px" />
                </ThemedLink>
                <ThemedLink
                  href={twitterUrl}
                  target="_blank"
                  sx={{ display: "flex", marginLeft: 3, color: "white" }}
                >
                  <GrTwitter fontSize="30px" />
                </ThemedLink>
              </Flex>
            </Flex>
          </Box>
          <Box backgroundColor="primary">
            <Flex
              sx={{
                flexDirection: ["column", "row"],
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "container",
                mx: "auto",
                px: 3,
                py: 2,
                color: "textReverse",
              }}
            >
              <Text as="p">© tbntdima • 2020</Text>
              <Text
                as="p"
                sx={{
                  display: "flex",
                }}
              >
                <span
                  sx={{
                    display: ["none", "block"],
                    mx: 1,
                  }}
                >
                  •
                </span>{" "}
                Built with{" "}
                <GatsbyLogo
                  color={theme.colors.textReverse}
                  style={{ margin: `0 ${theme.space[2]}` }}
                />{" "}
                • Deployed on{" "}
                <NetlifyLogo
                  color={theme.colors.textReverse}
                  style={{ margin: `0 ${theme.space[2]}` }}
                />
              </Text>
            </Flex>
          </Box>
        </Box>
      )}
    />
  )
}

export default Footer