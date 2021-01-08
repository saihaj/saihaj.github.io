import { HTMLAttributes, DetailedHTMLProps } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import cx from 'classnames'

import SectionHeader from './SectionHeader'
import HTMLContent from './HTMLContent'
import SkillTile from './SkillTile'

type AboutHeroProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const AboutHero = ( { className, ...props }: AboutHeroProps ) => {
  const { about, skills: { childContentJson: { values: SKILLS } } } = useStaticQuery( graphql`
    query AboutSection {
      about: markdownRemark(frontmatter: {title: {eq: "About"}}) {
        html
      }
      skills: file(sourceInstanceName: {eq: "content"}, name: {eq: "skills"}) {
        childContentJson {
        values {
          name
        }
      }
    }
  }
` )

  return (
    <section className={cx( 'flex flex-col', className )} {...props}>

      <div>
        <SectionHeader name="About" />
        <HTMLContent className="text-xl leading-6 tracking-wide">{about.html}</HTMLContent>
      </div>

      <div className="mt-16">
        <SectionHeader name="Skills" />
        <div className="flex flex-wrap justify-center">
          {SKILLS.map( ( values:{name:string} ) => (
            <SkillTile key={values.name} label={values.name} />
          ) )}
        </div>
      </div>

    </section>
  )
}
export default AboutHero
