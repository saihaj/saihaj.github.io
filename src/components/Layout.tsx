import type { ReactNode } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

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
} & SeoProps & Polymorphic.OwnProps<typeof Main>

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
