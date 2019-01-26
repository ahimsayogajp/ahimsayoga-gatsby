import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Container = styled.div`
  background-color: pink;
`

const Home = ({ node }) => (
  <Container>
    <Link to={`/${node.node_locale}/${node.slug}/`}>
      <div>
        <div>{node.heading}</div>
      </div>
    </Link>
  </Container>
)

class IndexPage extends React.Component {
  render() {
    var jaHomeEdges = [];
    if (this.props.data.japanese !== null) {
      jaHomeEdges = this.props.data.japanese.edges
    }
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h3>ja</h3>
          {jaHomeEdges.map(({ node }, i) => (
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
  query PageJaQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    japanese: allContentfulHome(filter: { node_locale: { eq: "ja" } }) {
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
