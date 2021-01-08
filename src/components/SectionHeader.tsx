import cx from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type SectionHeaderProps = {
  name: string,
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

const SectionHeader = ( { name, className }:SectionHeaderProps ) => (
  <h2 className={cx( 'font-fugaz text-3xl mb-2', className )}>{name}</h2>
)

export default SectionHeader
