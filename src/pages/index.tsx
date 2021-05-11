import Link from 'next/link'
import Image from 'next/image'
import { createUseStyles } from 'react-jss'

import Seo from '../components/Seo'
import Footer from '../components/Footer'
import { widthLessThan, Breakpoints, Colors } from '../theme'
import Button from '../components/Button'

const useStyles = createUseStyles( {
  main: {
    '& p': {
      margin: 0,
      padding: 0,
      lineHeight: '1.8rem',
    },
  },
  name: {
    margin: 0,
    padding: 0,
    fontFamily: 'Fugaz One',
    fontSize: '2.2rem',
  },
  links: {
    marginTop: '0.5rem',
    display: 'flex',
    alignContent: 'center',
    '& > button:not(:first-of-type)': {
      marginLeft: '1.5rem',
    },
  },
  img: {
    borderRadius: '9999px',
    borderColor: `${Colors.yellow} !important`,
    borderWidth: '0.15rem !important',
    borderStyle: 'solid !important',
  },
  navWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '2rem',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      marginLeft: 0,
      marginTop: '0.5rem',
      alignItems: 'center',
      marginBottom: '3rem',
    },
  },
  imgWrapper: {
    marginTop: '3rem',
    display: 'flex',
    marginBottom: '4rem',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 0,
    },
  },
} )

const Home = () => {
  const styles = useStyles()

  return (
    <>
      <Seo />

      <main className={styles.main}>

        <div className={styles.imgWrapper}>
          <Image className={styles.img} src="/images/me.png" width={120} height={120} quality={100} priority layout="fixed" />
          <div className={styles.navWrapper}>
            <h1 className={styles.name}>Saihajpreet Singh</h1>
            <nav className={styles.links}>
              <Link href="/about"><Button>Work</Button></Link>
              <Link href="/resume"><Button>Resume</Button></Link>
            </nav>
          </div>
        </div>

        <p>
          Greetings!
          <br />
          <br />
          I am a second year computer science student at
          Carleton University with honors in Internet Security.
          <br />
          <br />
          I am interested in web development, mobile development, {' '}
          serverless computing, developer tooling, distributed systems, and cloud infrastructure.
          <br />
          <br />
          In my free time I contribute to Open Source projects. {' '}
          I help maintain <a href="https://github.com/shabados/theme-tool#people" target="_blank" rel="noreferrer">shabados/theme-tool</a> and <a href="https://github.com/shabados/docs#people" target="_blank" rel="noreferrer">shabados/docs</a>.
          Member of <a href="https://github.com/graphql/graphql-js-wg" target="_blank" rel="noreferrer">GraphQL JS working group</a>. {' '}
          Working on <a href="https://github.com/shabados/website#people" target="_blank" rel="noreferrer">redesign of shabados.com</a>, {' '}
          <a href="https://github.com/shabados/mobile/graphs/contributors" target="_blank" rel="noreferrer">ShabadOS mobile app</a> and {' '}
          <a href="https://github.com/graphql/graphql-js/pull/2828" target="_blank" rel="noreferrer">migrating GraphQL JS to TypeScript</a>.
        </p>

      </main>

      <Footer />
    </>
  )
}

export default Home
