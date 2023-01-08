import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { NavItem, NavWrapper } from './index.css'

const PATHS = [
  {
    path: '/',
    name: 'About',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
]

export function Nav() {
  const { route } = useRouter()

  const isSelected = useCallback(
    (path: string) => {
      return route === path ? 'selected' : 'unselected'
    },
    [route],
  )

  return (
    <nav className={NavWrapper}>
      {PATHS.map(({ path, name }) => {
        return (
          <Link className={NavItem[isSelected(path)]} href={path} key={path}>
            {name}
          </Link>
        )
      })}
    </nav>
  )
}
