import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import cx from 'classnames'

type ContainerProps = {
  children: ReactNode
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Container = ( { children, className, ...props }:ContainerProps ) => (
  <div className={cx( 'container mx-auto max-w-4xl px-2 md:px-0', className )} {...props}>
    {children}
  </div>
)

export default Container
