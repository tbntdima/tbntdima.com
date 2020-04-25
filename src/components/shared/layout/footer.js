/** @jsx jsx */
import { jsx, useThemeUI, Flex, Box, Text, Link as ThemedLink } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../../../assets/images/svgs/logo"
import GatsbyLogo from "../../../assets/images/svgs/gatsbyLogo"
import NetlifyLogo from "../../../assets/images/svgs/netlifyLogo"
import { GrGithub, GrTwitter } from "react-icons/gr"

const Footer = () => {
  const { theme } = useThemeUI()

  return (
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
            color: "textOnDark",
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
          <Flex sx={{ alignItems: "center" }}>
            <ThemedLink
              href="https://github.com/tbntdima/tbntdima.com"
              target="_blank"
              sx={{ display: "flex", color: "textOnDark" }}
            >
              <GrGithub fontSize="30px" />
            </ThemedLink>
            <ThemedLink
              href="https://github.com/tbntdima/tbntdima.com"
              target="_blank"
              sx={{ display: "flex", marginLeft: 3, color: "textOnDark" }}
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
            color: "textOnDark",
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
            Built with <GatsbyLogo style={{ margin: `0 ${theme.space[2]}` }} />{" "}
            • Deployed on{" "}
            <NetlifyLogo style={{ margin: `0 ${theme.space[2]}` }} />
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer
