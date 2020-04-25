import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M10.96 0a8.07 8.07 0 011.36 4.48c.027 4.453-3.627 8.053-8.133 8.053A8.28 8.28 0 010 11.387 8.422 8.422 0 007.547 16C12.213 16 16 12.267 16 7.653 16 4.24 13.92 1.307 10.96 0z"
        fill="#151515"
      />
    </svg>
  )
}

export default SvgComponent
