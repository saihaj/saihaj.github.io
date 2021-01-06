import { HTMLAttributes, DetailedHTMLProps } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import cx from 'classnames'

import HTMLContent from './HTMLContent'

type SkillItemProp = {
  label: string,
  className?: string
}

const SkillItem = ( { label, className }:SkillItemProp ) => (
  <div className={cx(
    'px-6 bg-white rounded-lg',
    'text-theme-primary text-center text-md md:text-lg font-semibold',
    'my-1 mx-2',
    className,
  )}
  >
    {label}
  </div>
)

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
        <h3 className="font-fugaz text-3xl mb-2">About</h3>
        <HTMLContent className="text-xl leading-6 tracking-wide">{about.html}</HTMLContent>
      </div>

      <div className="mt-16">
        <h3 className="font-fugaz text-3xl mb-2">Skills</h3>

        <div className="flex flex-wrap justify-center">
          {SKILLS.map( ( values:{name:string} ) => (
            <SkillItem key={values.name} label={values.name} />
          ) )}
        </div>
      </div>

    </section>
  )
}
export default AboutHero
