import cx from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'

import { useState } from 'react'
import type { SectionProps } from './types'
import ProjectTile from '../ProjectTile'
import SectionHeader from '../SectionHeader'
import Button from '../Button'

type ProjectTilesListProps = {
  data: [{name:string, url:string}]
  className?: string
}

const ProjectTilesList = ( { data, className }:ProjectTilesListProps ) => (
  <div className="flex flex-wrap justify-center">
    {data.map( ( value:{name: string, url: string} ) => (
      <ProjectTile key={value.name} projectUrl={value.url} title={value.name} className={cx( 'm-2', className )} />
    ) )}
  </div>
)

const Projects = ( { className, ...props }: SectionProps ) => {
  const { file: { childContentJson: { values } } } = useStaticQuery( graphql`
  query ProjectSection {
    file(sourceInstanceName: {eq: "content"}, name: {eq: "projects"}) {
      childContentJson {
        values {
          name
          url
        }
      }
    }
  }
` )
  const [ showMore, setShowMore ] = useState( false )

  return (
    <section className={cx( className )} {...props}>
      <SectionHeader name="Projects" />
      <div className="flex flex-col items-center justify-center">
        {values.length > 6 && !showMore ? (
          <>
            <ProjectTilesList data={values.slice( 0, 6 )} />
            <Button className="w-56 mt-4" label="Show More" onClick={() => setShowMore( !showMore )} />
          </>
        ) : <ProjectTilesList data={values} />}
      </div>

    </section>
  )
}
export default Projects
