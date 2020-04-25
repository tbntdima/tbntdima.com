/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../../../assets/images/svgs/logo"
import ThemeToggle from "./theme-toggle"

const Header = () => {
  return (
    <Flex
      as="header"
      sx={{
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "container",
        mx: "auto",
        px: 3,
        py: 3,
      }}
    >
      <Link to="/">
        <Logo />
      </Link>

      <ThemeToggle />
    </Flex>
  )
}

export default Header
