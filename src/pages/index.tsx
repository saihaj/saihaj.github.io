import { createUseStyles } from 'react-jss'

import Seo from '../components/Seo'
import Footer from '../components/Footer'

const useStyles = createUseStyles( {
  main: {
  },
} )

const Home = () => {
  const styles = useStyles()

  return (
    <>
      <Seo />
      <main className={styles.main}>
        Home
      </main>

      <Footer />
    </>
  )
}

export default Home
