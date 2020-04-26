/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import { GrTwitter } from "react-icons/gr"

const Twitter = () => (
  <Link
    href="https://github.com/tbntdima"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      background: "#1FA1F3",
      border: "1px solid #1FA1F3",
      borderRadius: "3px",
      p: "6px 20px",
      color: "#fff",
    }}
  >
    <GrTwitter size="25px" sx={{ mr: 2 }} /> @tbntdima
  </Link>
)

export default Twitter
