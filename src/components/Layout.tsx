import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'clsx'

import Seo, { SeoProps } from './Seo'
import Footer from './Footer'
import Navbar from './Navbar'
import { Breakpoints, widthLessThan } from '../theme'

const useStyles = createUseStyles( {
  main: {
    [ widthLessThan( Breakpoints.tablet ) ]: {
      marginBottom: '3rem',
    },
    marginBottom: '4rem',
  },
} )

export type LayoutProps = {
  children:ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & SeoProps

const Page = ( { children, title, description, className, ...props }:LayoutProps ) => {
  const styles = useStyles()
  return (
    <>
      <Seo title={title} description={description} />
      <Navbar />
      <main className={cx( styles.main, className )} {...props}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Page
