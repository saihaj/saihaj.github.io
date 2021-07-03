
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
  
  I am a second year computer science student at Carleton University with honors in Internet Security.
  Software Developer Coop at [Giatec Scientific](https://www.giatecscientific.com).
  
  I am interested in web development, mobile development, serverless computing, developer tooling, distributed systems, and cloud infrastructure.

  Co-founder and CTO at [Ambassadors Media](https://ambassadors.media). Ambassadors Media’s vision seeks to identify and capitalize on emerging trends; Market. Network. Productions.
  Interlacing creativity and community with the Ambassador Vision, propels the sucess of both Ambassadors Media and our partners.
  

  In my free time I contribute to Open Source projects.
  I maintain [\`shabados/theme-tool\`](https://github.com/shabados/theme-tool#people) and [\`shabados/docs\`](https://github.com/shabados/docs#people).
  Member of [GraphQL JS working group](https://github.com/graphql/graphql-js-wg).
  I helped [migrate \`graphql-js\` to TypeScript](https://twitter.com/E1Goncharov/status/1396997659739762689?s=20).
  Working on [redesign of shabados.com](https://github.com/shabados/website#people),
  [ShabadOS mobile app](https://github.com/shabados/mobile/graphs/contributors),
  [Migrating \`graphql-relay-js\` to TypeScript](https://github.com/graphql/graphql-relay-js/pull/340) and new [Documentation site for GraphQL.js](https://github.com/graphql/graphql-js/issues/3150)
`

  const mdxSource = await serialize( source )

  return { props: { content: mdxSource } }
}

export default Home
