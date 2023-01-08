import Link from 'next/link'
import { Project } from '../../content/projects'
import {
  Header,
  ProjectContainer,
  ProjectDescription,
  ProjectItem,
  ProjectList,
  ProjectName,
} from './index.css'

export function ProjectSection({
  title,
  values,
}: {
  title: string
  values: Project[]
}) {
  return (
    <div className={ProjectContainer}>
      <h2 className={Header}>{title}</h2>
      <div className={ProjectList}>
        {values.map(({ name, href, description }) => {
          return (
            <Link
              key={href}
              href={href}
              className={ProjectItem}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <p className={ProjectName}>{name}</p>
              <p className={ProjectDescription}> {description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
