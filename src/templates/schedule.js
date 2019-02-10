import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout.js"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ScheduleTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div>
          <h1>{data.contentfulSchedule.heading}</h1>
          <span>Some SCHEDULE detail...</span>
        </div>
      </Layout>
    )
  }
}

ScheduleTemplate.propTypes = propTypes

export default ScheduleTemplate

export const pageQuery = graphql`
  query scheduleQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulSchedule(id: { eq: $id }) {
      title
      heading
    }
  }
`
