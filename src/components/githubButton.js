/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import { GrGithub } from "react-icons/gr"

const GithubButton = () => (
  <Link
    href="https://github.com/tbntdima"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      background: "#EFF3F6",
      border: "1px solid rgba(27, 31, 35, 0.2)",
      borderRadius: "3px",
      p: "6px 20px",
      color: "#000",
    }}
  >
    <GrGithub size="25px" sx={{ mr: 2 }} /> tbntdima
  </Link>
)

export default GithubButton
