/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../../../assets/images/svgs/logo"

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

      {/* ThemeToggler */}
    </Flex>
  )
}

export default Header
