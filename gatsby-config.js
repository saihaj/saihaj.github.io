/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-useless-escape */
/* eslint-disable global-require */
const tailwindConfig = require( './tailwind.config.js' )

module.exports = {
  siteMetadata: {
    title: 'Saihajpreet Singh',
    description: 'Personal Portfolio',
    author: '@saihaj',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [ 'Fugaz One', 'Fira Sans', 'Rubik:400,400i,500,600,700,800,900' ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require( 'tailwindcss' )( tailwindConfig ),
          require( 'autoprefixer' ),
          ...( process.env.NODE_ENV === 'production'
            ? [ require( 'cssnano' ) ]
            : [] ),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      },
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-C9H508NH16',
      },
    },
  ],
}
