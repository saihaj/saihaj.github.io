import { SVGProps } from 'react'

const SvgComponent = ( props: SVGProps<SVGSVGElement> ) => (
  <svg
    viewBox="0 0 1440 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-5 md:stroke-2 xl:stroke-1"
    {...props}
  >
    <path
      d="M1440 65.701c-272.59-239.68-1002.348 284.913-1441 0"
      stroke="#fff"
    />
  </svg>
)

export default SvgComponent
