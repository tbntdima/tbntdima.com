/** @jsx jsx */
import { jsx, Flex, Box, useColorMode } from "theme-ui"
import Sun from "../../../assets/images/svgs/sun"
import Moon from "../../../assets/images/svgs/moon"

const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()

  return typeof window !== "undefined" ? (
    <Flex
      sx={{
        position: "relative",
        justifyContent: "space-around",
        alignItems: "center",
        width: 40,
        height: 20,
        backgroundColor: "primary",
        borderRadius: 20,
        p: "2px",
      }}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      <Moon />
      <Sun />
      <Box
        sx={{
          position: "absolute",
          left: "1px",
          top: "1px",
          width: 18,
          height: 18,
          borderRadius: 18,
          background: "white",
          transform:
            colorMode === "light"
              ? "translateX(0)"
              : "translateX(calc(100% + 2px))",
        }}
      />
    </Flex>
  ) : null
}

export default ThemeToggle
