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
