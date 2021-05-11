import { createUseStyles } from 'react-jss'

import PROFILES from '../content/SocialProfiles'

const useStyles = createUseStyles( {
  main: {
    marginTop: 'auto',
    marginBottom: '1rem',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    '& > a:not(:first-of-type)': {
      marginLeft: '0.5rem',
    },
  },
} )

const Footer = () => {
  const styles = useStyles()

  return (
    <footer className={styles.main}>
      {PROFILES.map( ( { name, url, svg: Icon } ) => (
        <a key={url} aria-label={name} href={url} target="_blank" rel="noreferrer"><Icon /></a>
      ) )}
    </footer>
  )
}
export default Footer
