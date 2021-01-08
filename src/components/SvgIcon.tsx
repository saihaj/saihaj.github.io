import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import cx from 'classnames'

type IconProps ={

  /**
   * SVG Icon from `static/svg`
   */
  svg: string // see types.d.ts
  url: AnchorHTMLAttributes<HTMLAnchorElement>['href']
  className?: string,
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const Icon = ( { url, svg: Svg, className, ...props }:IconProps ) => (
  <a
    aria-label={url}
    href={url}
    target="_blank"
    rel="noreferrer"
    className={cx( 'fill-current text-white hover:text-gray-400', className )}
    {...props}
  >
    <Svg />
  </a>
)

export default Icon
