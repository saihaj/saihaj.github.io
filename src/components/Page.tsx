import { createUseStyles } from 'react-jss'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import cx from 'clsx'

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
  source: MDXRemoteSerializeResult,
} & Omit<LayoutProps, 'children'>

const Page = ( { source, className, ...props }:PageProps ) => {
  const styles = useStyles()

  return (
    <Layout className={cx( styles.main, className )} {...props}>
      <MDXRemote
        {...source}
        components={{
          a: Anchor,
        }}
      />
    </Layout>
  )
}

export default Page
