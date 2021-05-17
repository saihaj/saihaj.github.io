import type { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { MDXProvider } from '@mdx-js/react'

import { MDXFrontMatter } from '../lib/types'
import Layout, { LayoutProps } from './Layout'
import Anchor from './Anchor'

const useStyles = createUseStyles( {
  main: {
    '& p': {
      margin: 0,
      marginBottom: '1rem',
      padding: 0,
      lineHeight: '1.8rem',
    },
  },
} )

type PageProps = {
  children:ReactNode,
  frontMatter: MDXFrontMatter
} & LayoutProps

const Page = ( { children, title, description, frontMatter, className, ...props }:PageProps ) => {
  const styles = useStyles()

  return (
    <Layout
      title={frontMatter?.title ?? title}
      description={frontMatter?.description ?? description}
      className={styles.main}
      {...props}
    >
      <MDXProvider components={{
        a: Anchor,
      }}
      >
        {children}
      </MDXProvider>
    </Layout>
  )
}

export default Page
