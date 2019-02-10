import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout.js"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ContactTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h1>{data.contentfulContact.heading}</h1>
          <span>Some CONTACT detail...</span>
        </div>
      </Layout>
    )
  }
}

ContactTemplate.propTypes = propTypes

export default ContactTemplate

export const pageQuery = graphql`
  query contactQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulContact(id: { eq: $id }) {
      title
      heading
    }
  }
`
