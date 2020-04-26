/** @jsx jsx */
import { jsx } from "theme-ui"

const Button = ({ children }) => (
  <span
    sx={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      p: "8px 16px",
      backgroundColor: "cardBackground",
      boxShadow: "0px 2px 4px rgba(92, 99, 105, 0.15)",
      borderRadius: "100px",
    }}
  >
    {children}
  </span>
)

export default Button
