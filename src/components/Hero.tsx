import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Typical from 'react-typical'

const intro = [
  'Hey there 👋 !', 1000,
  'Thanks for stopping by ', 1000,
  'I am a student 🎓', 1000,
  'Majoring Computer Science 💻', 1000,
  'Scroll down to learn more about me 👇', 1000,
]

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
        <Typical className="text-center text-3xl" wrapper="h3" steps={intro} loop={Infinity} />
      </div>
    </div>
  )
}

export default Hero
