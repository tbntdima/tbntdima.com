import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8.144 1.33L9.96.088a.225.225 0 01.33.088l.953 1.983a.225.225 0 00.22.127l2.193-.167a.225.225 0 01.241.242l-.166 2.193a.226.226 0 00.127.22l1.982.952c.124.06.166.216.089.33l-1.24 1.816a.225.225 0 000 .254l1.24 1.816a.225.225 0 01-.089.33l-1.982.952a.226.226 0 00-.127.22l.166 2.193a.225.225 0 01-.241.242l-2.193-.167a.225.225 0 00-.22.128l-.953 1.982a.225.225 0 01-.33.088l-1.816-1.24a.225.225 0 00-.253 0l-1.817 1.24a.225.225 0 01-.33-.088l-.952-1.982a.225.225 0 00-.22-.127l-2.193.166a.225.225 0 01-.241-.242l.166-2.193a.225.225 0 00-.127-.22l-1.982-.952a.225.225 0 01-.089-.33l1.24-1.816a.225.225 0 000-.254L.107 6.057a.225.225 0 01.089-.33l1.982-.952a.225.225 0 00.127-.22l-.166-2.193a.225.225 0 01.241-.242l2.193.166a.225.225 0 00.22-.126L5.745.177a.225.225 0 01.33-.088l1.816 1.24a.225.225 0 00.253 0z"
        fill="#FFC639"
      />
      <path
        d="M8.017 14.075a6.075 6.075 0 100-12.15 6.075 6.075 0 000 12.15z"
        fill="#FFE564"
      />
    </svg>
  )
}

export default SvgComponent
