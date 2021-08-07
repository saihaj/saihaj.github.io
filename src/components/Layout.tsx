import type { ReactNode } from 'react'
import { StitchesComponentWithAutoCompleteForJSXElements } from '@stitches/react'

import { styled } from '../theme'

import Seo, { SeoProps } from './Seo'
import Footer from './Footer'
import Navbar from './Navbar'

const Main = styled( 'main', {
  '@tablet': {
    marginBottom: '3rem',
  },
  marginBottom: '4rem',
} )

export type LayoutProps = {
  children:ReactNode,
} & StitchesComponentWithAutoCompleteForJSXElements<'main'> & SeoProps

const Page = ( { children, title, description, className, ...props }:LayoutProps ) => (
  <>
    <Seo title={title} description={description} />
    <Navbar />
    <Main className={className} {...props}>
      {children}
    </Main>
    <Footer />
  </>
)

export default Page
