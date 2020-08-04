module.exports = {
  siteMetadata: {
    title: 'Saihajpreet Singh',
    description: 'Personal Portfolio',
    author: '@saihaj',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Saihajpreet Singh',
        short_name: 'saihaj',
        start_url: '/',
        icon: './static/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-better-jss',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'source sans pro\:Bold 700',
        ],
        display: 'swap',
      },
    },
  ],
}
