import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import cx from 'classnames'

import type { SectionProps } from './types'
import SocialIcons from '../SocialIcons'

const Hero = ( { className, ...props }: SectionProps ) => {
  const { file: { childImageSharp } } = useStaticQuery( graphql`
  query FaviconImage {
    file(sourceInstanceName: {eq: "images"}, name: {eq: "me"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
` )

  return (
    <section className={cx( 'flex h-screen items-center justify-center', className )} {...props}>
      <div className="-mt-24">

        <div className="flex">
          <div className="mx-auto">
            <div className="border-theme-secondary border-8 rounded-full inline-block">
              <GatsbyImage alt="Saihajpreet Singh's Memoji" className="w-48 rounded-full" image={childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>

        <h1 className="font-fugaz text-6xl text-center">Saihajpreet Singh</h1>

        <SocialIcons />

      </div>
    </section>
  )
}

export default Hero
