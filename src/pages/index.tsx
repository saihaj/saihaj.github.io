import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { createUseStyles } from 'react-jss'

import SEO from '../components/Seo'

const useStyles = createUseStyles( {
  '@global': {
    body: {
      backgroundColor: '#95A5A6',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'Source Sans Pro',
    fontSize: '4.7rem',
    paddingTop: '15vh',
  },
  memoji: {
    width: '300px',
  },
} )

const IndexPage:React.FC = () => {
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
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <SEO title="Home" />
      <h1 className={styles.title}>Coming Soon!</h1>
      <Img className={styles.memoji} alt="Saihajpreet Singh's Memoji" fluid={childImageSharp.fluid} />
    </div>
  )
}

export default IndexPage
