import Link from 'next/link'
import { NavItem, NavWrapper } from './index.css'

export function Nav() {
  return (
    <nav className={NavWrapper}>
      {/* <Link className={NavItem['unselected']} href="/">
        Projects
      </Link> */}
      <Link className={NavItem['selected']} href="/">
        About
      </Link>
    </nav>
  )
}
