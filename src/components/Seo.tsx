import Head from 'next/head'

type SeoProps = {
  title?:string,
  description?: string
}

const Seo = ( { title, description }:SeoProps ) => (
  <Head>
    <title> {title ? `${title} | Saihajpreet Singh` : 'Saihajpreet Singh'}</title>
    {[ 'author', 'og:site_name', 'og:title' ].map( property => (
      <meta key={property} property={property} content="Saihajpreet Singh" />
    ) )}
    {[ 'description', 'og:description' ].map( property => (
      <meta key={property} name={property} content={description || '"Personal Portfolio"'} />
    ) )}
    <meta property="og:profile:first_name" content="Saihajpreet" />
    <meta property="og:profile:last_name" content="Singh" />
    <meta property="og:profile:gender" content="male" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@singh_saihaj" />
    <meta name="twitter:creator" content="@singh_saihaj" />
    <meta name="robots" content="index,follow" />
  </Head>
)

export default Seo
