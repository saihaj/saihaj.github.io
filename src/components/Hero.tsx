import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SocialIcons from './SocialIcons'

const Hero = () => {
  const { file: { childImageSharp } } = useStaticQuery( graphql`
  query FaviconImage {
    file( sourceInstanceName: { eq: "images" }, name: { eq: "me" } ) {
      childImageSharp {
        fluid(quality:100, maxWidth:800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
` )

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="-mt-24">

        <div className="flex">
          <div className="mx-auto">
            <div className="border-theme-secondary border-8 rounded-full inline-block">
              <Img alt="Saihajpreet Singh's Memoji" className="w-48 rounded-full" fluid={childImageSharp.fluid} />
            </div>
          </div>
        </div>

        <h1 className="font-fugaz text-6xl text-center">Saihajpreet Singh</h1>

        <SocialIcons />

      </div>
    </div>
  )
}

export default Hero
