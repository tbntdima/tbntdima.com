/** @jsx jsx */
import { jsx } from "theme-ui"

function SvgComponent(props) {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M5.25 16.5h7.5a.75.75 0 00.742-.643L14.9 6h.85V4.5h-1.037l-1.292-2.585a.749.749 0 00-.671-.415h-7.5a.75.75 0 00-.671.415L3.287 4.5H2.25V6h.85l1.408 9.857a.75.75 0 00.742.643zm7.813-8.25H4.936L4.616 6h8.77l-.322 2.25zM5.9 15l-.322-2.25h6.843L12.099 15H5.9zM5.713 3h6.574l.75 1.5H4.963l.75-1.5z"
        sx={{ fill: "primary" }}
      />
    </svg>
  )
}

export default SvgComponent
