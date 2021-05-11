import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export const FacebookIcon = ( props:IconProps ) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 1.667h-2.5a4.167 4.167 0 00-4.167 4.166v2.5h-2.5v3.334h2.5v6.666h3.334v-6.666h2.5L15 8.333h-3.333v-2.5A.833.833 0 0112.5 5H15V1.667z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const InstagramIcon = ( props: IconProps ) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.167 1.667H5.833a4.167 4.167 0 00-4.166 4.166v8.334a4.167 4.167 0 004.166 4.166h8.334a4.167 4.167 0 004.166-4.166V5.833a4.167 4.167 0 00-4.166-4.166z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.333 9.475a3.333 3.333 0 11-6.594.978 3.333 3.333 0 016.594-.978zM14.583 5.417h.009"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const LinkedinIcon = ( props: IconProps ) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 6.667a5 5 0 015 5V17.5H15v-5.833a1.667 1.667 0 10-3.333 0V17.5H8.333v-5.833a5 5 0 015-5v0zM5 7.5H1.667v10H5v-10zM3.333 5a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const MailIcon = ( props: IconProps ) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.333 5L10 10.833 1.667 5"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const TwitterIcon = ( props:IconProps ) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.167 2.5a9.083 9.083 0 01-2.617 1.275 3.733 3.733 0 00-6.55 2.5v.833a8.883 8.883 0 01-7.5-3.775s-3.333 7.5 4.167 10.834a9.7 9.7 0 01-5.834 1.666C8.333 20 17.5 15.833 17.5 6.25c0-.232-.023-.464-.067-.692A6.433 6.433 0 0019.167 2.5v0z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const GithubIcon = ( props: IconProps ) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 18.333v-3.225a2.807 2.807 0 00-.783-2.175c2.617-.291 5.367-1.283 5.367-5.833a4.534 4.534 0 00-1.25-3.125 4.225 4.225 0 00-.075-3.142s-.984-.291-3.259 1.234a11.15 11.15 0 00-5.833 0C5.225.542 4.242.833 4.242.833a4.225 4.225 0 00-.075 3.142 4.533 4.533 0 00-1.25 3.15c0 4.517 2.75 5.508 5.366 5.833a2.809 2.809 0 00-.783 2.15v3.225m0-2.5c-4.167 1.25-4.167-2.083-5.833-2.5l5.833 2.5z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
