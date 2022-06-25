
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

  I am Fullstack Engineer pursuing computer science at [Carleton University](https://carleton.ca).

  I am interested in web development, mobile development, serverless computing, developer tooling, distributed systems, decentralized systems, and cloud infrastructure.

  I help maintain many open source projects notably [\`graphql-js\`](https://github.com/graphql/graphql-js), tooling from [@TheGuildDev](https://twitter.com/TheGuildDev), [@shabad_os](https://twitter.com/shabad_os) and [\`graphiql\`](https://github.com/graphql/graphiql#active).

  I work on many things!

  [@TheGuildDev](https://twitter.com/TheGuildDev) working on open source tooling for API infrastructure.

  [@soundxyz_](https://twitter.com/soundxyz_) building web3 tools for artists and their communities.

  [@TheGraph](https://twitter.com/graphprotocol) working on [@Geo](https://twitter.com/geobrowser)
`

  const mdxSource = await serialize( source )

  return { props: { content: mdxSource } }
}

export default Home
