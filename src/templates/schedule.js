import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import { ContentGrid, ContentContainer } from '../components/layout/ContentGrid'
import Layout from "../components/layout"
import Banner from '../components/Banner'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Schedule = styled.div`
  hr {
    margin: 80px 0;
  }
`

class ScheduleTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <Banner banner={data.contentfulSchedule.banner} heading={data.contentfulSchedule.heading} locale={data.contentfulSchedule.node_locale} />
        <ContentGrid>
          <ContentContainer>
            <Schedule
              dangerouslySetInnerHTML={{
                __html: data.contentfulSchedule.body.childMarkdownRemark.html
              }}
            />
          </ContentContainer>
        </ContentGrid>
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
      banner {
        title
        fluid {
          src
          srcSet
          aspectRatio
          sizes
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      node_locale
    }
  }
`
