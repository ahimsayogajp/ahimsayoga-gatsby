import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Home = ({ node }) => (

  <div>
    <Link to={`/${node.node_locale}/${node.slug}/`}>
      <div>
        <div>{node.heading}</div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render() {
    const enHomeEdges = this.props.data.english.edges
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h3>en</h3>
          {enHomeEdges.map(({ node }, i) => (
            <Home node={node} key={node.id} />
          ))}
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageEnUsQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    english: allContentfulHome(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          contentful_id
          node_locale
          title
          heading
          slug
        }
      }
    }
  }
`
