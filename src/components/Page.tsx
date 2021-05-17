import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'

import Seo, { SeoProps } from '../components/Seo'
import Footer from '../components/Footer'
import Navbar from './Navbar'

const useStyles = createUseStyles( {
  main: {
    '& p': {
      margin: 0,
      padding: 0,
      lineHeight: '1.8rem',
    },
  },

} )

type PageProps = {
    children:ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & SeoProps;

const Page = ( { children, title, description, ...props }:PageProps ) => {
  const styles = useStyles()

  return (
    <>
      <Seo title={title} description={description} />
      <main className={styles.main} {...props}>
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Page
