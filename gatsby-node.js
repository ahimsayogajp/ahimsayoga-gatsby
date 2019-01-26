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

      // Create template pages
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
    }).then(() => {
        graphql(
          `
            {
              allContentfulAbout(limit: 1000) {
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

          // Create template pages
          const aboutTemplate = path.resolve(`./src/templates/about.js`)
          // We want to create a detailed page for each
          // category node. We'll just use the Contentful id for the slug.
          _.each(result.data.allContentfulAbout.edges, edge => {
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
              component: slash(aboutTemplate),
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
              allContentfulSchedule(limit: 1000) {
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

          // Create template pages
          const scheduleTemplate = path.resolve(`./src/templates/schedule.js`)
          // We want to create a detailed page for each
          // category node. We'll just use the Contentful id for the slug.
          _.each(result.data.allContentfulSchedule.edges, edge => {
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
              component: slash(scheduleTemplate),
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
              allContentfulContact(limit: 1000) {
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

          // Create template pages
          const contactTemplate = path.resolve(`./src/templates/contact.js`)
          // We want to create a detailed page for each
          // category node. We'll just use the Contentful id for the slug.
          _.each(result.data.allContentfulContact.edges, edge => {
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
              component: slash(contactTemplate),
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
