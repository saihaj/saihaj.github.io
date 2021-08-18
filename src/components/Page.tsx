import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import cx from 'clsx'

import Layout, { LayoutProps } from './Layout'
import Anchor from './Anchor'
import { css } from '../theme'

const main = css( {
  '& p': {
    margin: 0,
    marginBottom: '1rem',
    padding: 0,
    lineHeight: '1.8rem',
  },
} )

type PageProps = {
  source: MDXRemoteSerializeResult,
} & Omit<LayoutProps, 'children'>

const Page = ( { source, className, ...props }:PageProps ) => (
  <Layout className={cx( main(), className )} {...props}>
    <MDXRemote
      {...source}
      components={{
        a: Anchor,
      }}
    />
  </Layout>
)

export default Page
