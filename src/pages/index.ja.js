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
  background-color: green;
`

const Home = ({ node }) => (
  <Container>
    <div>
      <div>{node.heading}</div>
    </div>
  </Container>
)

class IndexPage extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h3>ja</h3>
          <Home node={this.props.data.page}></Home>
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
    page: contentfulHome(node_locale: { eq: "ja" }, slug: { eq: "home"}) {
      title
      heading
      id
      contentful_id
      node_locale
      title
      heading
      slug
    }
  }
`
