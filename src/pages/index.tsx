
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
  
  I am Full Stack dev pursing computer science with honors in Internet Security at [Carleton University](https://carleton.ca).
  Currently working at [Giatec Scientific](https://www.giatecscientific.com) as a Software Developer Coop.

  I am interested in web development, mobile development, serverless computing, developer tooling, distributed systems, decentralized systems, and cloud infrastructure.

  In my free time I contribute to Open Source projects. Member of [GraphQL JS working group](https://github.com/graphql/graphql-js-wg).
  I helped [migrate \`graphql-js\` to TypeScript](https://twitter.com/E1Goncharov/status/1396997659739762689?s=20).
  Working on [redesign of shabados.com](https://github.com/shabados/website#people),
  [ShabadOS mobile app](https://github.com/shabados/mobile/graphs/contributors),
  [Migrating \`graphql-relay-js\` to TypeScript](https://github.com/graphql/graphql-relay-js/pull/340) and new [Documentation site for GraphQL.js](https://github.com/graphql/graphql-js/issues/3150)<br/>
  I maintain [\`shabados/theme-tool\`](https://github.com/shabados/theme-tool#people) and [\`shabados/docs\`](https://github.com/shabados/docs#people).<br/>
  Leading automation and development efforts [@ScribeDAO](https://twitter.com/ScribeDAO).<br/>
  Member of [The Guild](https://the-guild.dev) helping with GraphQL tooling in JS/TS ecosystem.

  Co-founded [Ambassadors Media](https://ambassadors.media) and lead technical development.
`

  const mdxSource = await serialize( source )

  return { props: { content: mdxSource } }
}

export default Home
