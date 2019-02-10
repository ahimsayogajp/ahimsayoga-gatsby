import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout.js"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AboutTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h1>{data.contentfulAbout.heading}</h1>
          <span>Some ABOUT detail...</span>
        </div>
      </Layout>
    )
  }
}

AboutTemplate.propTypes = propTypes

export default AboutTemplate

export const pageQuery = graphql`
  query aboutQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulAbout(id: { eq: $id }) {
      title
      heading
    }
  }
`
