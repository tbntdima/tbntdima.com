/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Box backgroundColor="background">
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
          maxWidth: "container",
          mx: "auto",
          px: 3,
        }}
      >
        <Header />
        <main
          sx={{
            flex: 1,
          }}
        >
          {children}
        </main>
        <Footer />
      </Flex>
    </Box>
  )
}

export default Layout
