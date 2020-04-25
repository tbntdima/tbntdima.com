import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      alt="gatsbyjs"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zM2.579 12.125l9.296 9.297a9.422 9.422 0 01-9.296-9.297zm11.53 9.061L2.814 9.891C3.772 5.702 7.521 2.577 12 2.577a9.41 9.41 0 017.618 3.877l-1.304 1.152A7.695 7.695 0 004.766 9.38l9.853 9.854a7.708 7.708 0 004.85-5.389h-4.084V12h6.038c0 4.48-3.125 8.228-7.314 9.186z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
