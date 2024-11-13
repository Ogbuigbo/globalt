import * as React from "react"
import { SVGProps } from "react"
const Email = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={104}
    height={104}
    fill="none"
    {...props}
  >
    <path
      fill="#000000"
      fillRule="evenodd"
      d="M5 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5ZM7.625 8.22a1 1 0 1 0-1.25 1.56l3.75 3.001a3 3 0 0 0 3.75 0l3.75-3a1 1 0 1 0-1.25-1.562l-3.75 3a1 1 0 0 1-1.25 0L7.625 8.22Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Email;