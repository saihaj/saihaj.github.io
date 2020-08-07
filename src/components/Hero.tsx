import React from 'react'
import { createUseStyles } from 'react-jss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Typical from 'react-typical'

const useStyles = createUseStyles( {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    marginTop: '20vh',
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Fugaz One',
    fontSize: '4rem',
    margin: 0,
  },
  memoji: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '16rem',
  },
  intro: {
    textAlign: 'center',
    fontSize: '2rem',
    marginTop: 15,
  },
} )

const intro = [
  'Hey there 👋 !', 1000,
  'Thanks for stopping by ', 1000,
  'I am a student 🎓', 1000,
  'Majoring Computer Science 💻', 1000,
  'Scroll down to learn more about me 👇', 1000,
]

const Hero = () => {
  const styles = useStyles()

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Img className={styles.memoji} alt="Saihajpreet Singh's Memoji" fluid={childImageSharp.fluid} />
        <h1 className={styles.name}>Saihajpreet Singh</h1>
        <Typical
          wrapper="h3"
          steps={intro}
          loop={Infinity}
          className={styles.intro}
        />
      </div>
    </div>
  )
}

export default Hero
