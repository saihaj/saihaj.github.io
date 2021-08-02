import { createUseStyles } from 'react-jss'
import Seo from '../components/Seo'

const useStyles = createUseStyles( {
  main: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto 0',
    alignItems: 'center',
    '& h1': {
      fontSize: '1.5rem',
    },
    '& h2': {
      fontSize: '1.2rem',
    },
    '& > span': {
      margin: '0 0.5rem',
    },
  },
} )

const Error = () => {
  const classes = useStyles()

  return (
    <>
      <Seo title="Not Found" description="This page could not be found." />
      <div className={classes.main}>
        <h1>404</h1>
        <span>|</span>
        <h2>This page could not be found.</h2>
      </div>
    </>
  )
}

export default Error
