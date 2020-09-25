const path = require( 'path' )

exports.createSchemaCustomization = ( { actions } ) => {
  const { createTypes } = actions

  const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        title: String!
        layout: String
      }
    `
  createTypes( typeDefs )
}

exports.createPages = async ( { actions, graphql, reporter } ) => {
  const { createPage } = actions

  const result = await graphql( `
  query AllContentPages {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            layout
          }
        }
      }
    }
  }
  ` )

  if ( result.errors ) reporter.panicOnBuild( '🚨  ERROR: Loading "createPages" query' )

  const pages = result.data.allMarkdownRemark.edges

  // Call `createPage` for each page
  pages
    .filter( ( { node: { frontmatter: { layout } } } ) => layout )
    .forEach( ( { node: {
      id,
      frontmatter: { layout, permalink },
    } } ) => {
      createPage( {
        path: permalink,
        component: path.resolve( `src/templates/${layout}.js` ),
        context: { id },
      } )
    } )
}
