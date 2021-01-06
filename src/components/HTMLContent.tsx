/* eslint-disable react/no-danger */
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'

type HTMLContentProps = {
  children: ReactNode,
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const HTMLContent = ( { children, className, ...props }:HTMLContentProps ) => ( typeof children === 'string'
  ? <div className={className} dangerouslySetInnerHTML={{ __html: children }} {...props} />
  : <div className={className} {...props}>{children}</div> )

export default HTMLContent
