import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Container = styled.section`
  grid-area: center;
  background-color: green;
`

const Home = ({ node }) => (
  <Container>
      {node.heading}
  </Container>
)

class IndexPage extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <Home node={this.props.data.page}></Home>
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
