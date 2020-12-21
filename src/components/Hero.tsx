import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SocialIcons from './SocialIcons'

const Hero = () => {
  const { file: { childImageSharp } } = useStaticQuery( graphql`
  query FaviconImage {
    file( sourceInstanceName: { eq: "images" }, name: { eq: "favicon" } ) {
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
        <Img alt="Saihajpreet Singh's Memoji" className="mx-auto w-64" fluid={childImageSharp.fluid} />
        <h1 className="font-fugaz text-6xl text-center">Saihajpreet Singh</h1>
        <SocialIcons />
      </div>
    </div>
  )
}

export default Hero
