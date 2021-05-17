import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'

import Seo, { SeoProps } from '../components/Seo'
import Footer from '../components/Footer'
import Navbar from './Navbar'

export type LayoutProps = {
  children:ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & SeoProps

const Page = ( { children, title, description, ...props }:LayoutProps ) => (
  <>
    <Seo title={title} description={description} />
    <Navbar />
    <main {...props}>
      {children}
    </main>
    <Footer />
  </>
)

export default Page
