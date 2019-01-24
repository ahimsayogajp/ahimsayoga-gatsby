import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class HomeTemplate extends React.Component {
  render() {
    const home = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h1>{home.contentfulHome.heading}</h1>
          <span>Some detail...</span>
        </div>
      </Layout>
    )
  }
}

HomeTemplate.propTypes = propTypes

export default HomeTemplate

export const pageQuery = graphql`
  query homeQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulHome(id: { eq: $id }) {
      title
      heading
    }
  }
`
