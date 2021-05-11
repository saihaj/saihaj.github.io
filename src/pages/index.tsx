import Link from 'next/link'
import Image from 'next/image'
import { createUseStyles } from 'react-jss'

import Seo from '../components/Seo'
import Footer from '../components/Footer'
import { widthLessThan, Breakpoints, Colors } from '../theme'
import Button from '../components/Button'

const useStyles = createUseStyles( {
  main: {
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
    },
  },
  imgWrapper: {
    marginTop: '3rem',
    display: 'flex',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      flexDirection: 'column',
      alignItems: 'center',
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
      </main>

      <Footer />
    </>
  )
}

export default Home
