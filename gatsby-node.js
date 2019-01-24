const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulProduct(limit: 1000) {
            edges {
              node {
                id
                contentful_id
                node_locale
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create Product pages
        const productTemplate = path.resolve(`./src/templates/product.js`)
        // We want to create a detailed page for each
        // product node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulProduct.edges, edge => {
          // We need a common ID to cycle between locales.
          const commonId = edge.node.contentful_id
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.node_locale}/products/${commonId}/`,
            component: slash(productTemplate),
            context: {
              id: edge.node.id,
              contentful_id:  edge.node.contentful_id,
            },
          })
        })
      })
      .then(() => {
        graphql(
          `
            {
              allContentfulCategory(limit: 1000) {
                edges {
                  node {
                    id
                    contentful_id
                    node_locale
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // Create Category pages
          const categoryTemplate = path.resolve(`./src/templates/category.js`)
          // We want to create a detailed page for each
          // category node. We'll just use the Contentful id for the slug.
          _.each(result.data.allContentfulCategory.edges, edge => {
            // We need a common ID to cycle between locales.
            const commonId = edge.node.contentful_id
            // Gatsby uses Redux to manage its internal state.
            // Plugins and sites can use functions like "createPage"
            // to interact with Gatsby.
            createPage({
              // Each page is required to have a `path` as well
              // as a template component. The `context` is
              // optional but is often necessary so the template
              // can query data specific to each page.
              path: `/${edge.node.node_locale}/categories/${commonId}/`,
              component: slash(categoryTemplate),
              context: {
                id: edge.node.id,
                contentful_id:  edge.node.contentful_id,
              },
            })
          })

          resolve()
        })
      }).then(() => {
        graphql(
          `
            {
              allContentfulHome(limit: 1000) {
                edges {
                  node {
                    id
                    contentful_id
                    node_locale
                    slug
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // Create Category pages
          const homeTemplate = path.resolve(`./src/templates/home.js`)
          // We want to create a detailed page for each
          // category node. We'll just use the Contentful id for the slug.
          _.each(result.data.allContentfulHome.edges, edge => {
            // Get the URL slug from Contentful content type
            const slug = edge.node.slug
            // Gatsby uses Redux to manage its internal state.
            // Plugins and sites can use functions like "createPage"
            // to interact with Gatsby.
            createPage({
              // Each page is required to have a `path` as well
              // as a template component. The `context` is
              // optional but is often necessary so the template
              // can query data specific to each page.
              path: `/${edge.node.node_locale}/${edge.node.slug}/`,
              component: slash(homeTemplate),
              context: {
                id: edge.node.id,
                contentful_id:  edge.node.contentful_id,
              },
            })
          })

          resolve()
        })
      })
  })
}
