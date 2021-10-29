import type { ReactNode, DetailedHTMLProps, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

type AnchorProps = {
    href: string,
    children?: ReactNode,
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Anchor = ( { href, children, ...props }: AnchorProps ) => (
  href.startsWith( 'http' ) || href.startsWith( 'mailto' ) ? (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <Link href={href} {...props} passHref>
      <a>{children}</a>
    </Link>
  )
)

export default Anchor
