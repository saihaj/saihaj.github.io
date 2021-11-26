
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { GetStaticProps } from 'next'

import Page from '../components/Page'

type HomeProps = {
  content: MDXRemoteSerializeResult
}

const Home = ( { content }:HomeProps ) => <Page source={content} />

export const getStaticProps:GetStaticProps = async () => {
  const source = `
  Greetings!
  
  I am Full stack Engineer pursuing computer science with honors in Internet Security at [Carleton University](https://carleton.ca).

  I am interested in web development, mobile development, serverless computing, developer tooling, distributed systems, decentralized systems, and cloud infrastructure.

  I help maintain many open source projects notably [\`graphql-js\`](https://github.com/graphql/graphql-js), tooling from [@TheGuildDev](https://twitter.com/TheGuildDev) and [@shabad_os](https://twitter.com/shabad_os).

  Engineer at [@soundxyz_](https://twitter.com/soundxyz_) building web3 tools for artists.
  Leading automation and development efforts [@ScribeDAO](https://twitter.com/ScribeDAO).

  Co-founded [Ambassadors Media](https://ambassadors.media) and lead technical development.
`

  const mdxSource = await serialize( source )

  return { props: { content: mdxSource } }
}

export default Home
