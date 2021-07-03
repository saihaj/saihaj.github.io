import Image from 'next/image'
import { createUseStyles } from 'react-jss'

import { widthLessThan, Breakpoints, Colors } from '../theme'
import Button from './Button'
import Link from './Anchor'

const useStyles = createUseStyles( {
  main: {
    marginTop: '3rem',
    display: 'flex',
    marginBottom: '4rem',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 0,
    },
  },
  name: {
    margin: 0,
    padding: 0,
    fontFamily: 'Fugaz One',
    fontSize: '2.2rem',
    '& a': {
      textDecoration: 'none',
    },
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

} )

const Navbar = () => {
  const styles = useStyles()

  return (
    <div className={styles.main}>
      <Image alt="Saihaj Headshot" className={styles.img} src="/images/me.png" width={120} height={120} quality={100} priority layout="fixed" />
      <div className={styles.navWrapper}>
        <h1 className={styles.name}>
          <Link href="/">
            Saihajpreet Singh
          </Link>
        </h1>
        <nav className={styles.links}>
          <Link href="/projects"><Button>Projects</Button></Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
