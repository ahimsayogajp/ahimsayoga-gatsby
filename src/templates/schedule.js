import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import { ContentGrid, ContentContainer } from '../components/layout/ContentGrid'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from '../components/Banner'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Welcome = styled.div`
  font-size: 34px;
  font-family: ${props => props.theme.fonts.headingDefault};
  color: ${props => props.theme.colors.textWelcome};
  margin-bottom: 6px;
`

const Timetable = styled.div`
  hr {
    margin: 80px 0;
  }
  ul {
    margin-top: 2.5em;
    margin-bottom: 2.5em;
  }
`

const Schedule = ({ node }) => (
  <section>
    <SEO title="Ahimsa - Shivam Yoga Center" lang={node.node_locale} />
    <Banner banner={node.banner} heading={node.heading} locale={node.node_locale} />
    <ContentGrid>
      <ContentContainer>
        <Welcome>{node.welcome}</Welcome>
        <Timetable
          dangerouslySetInnerHTML={{
            __html: node.body.childMarkdownRemark.html
          }}
        />
      </ContentContainer>
    </ContentGrid>
  </section>
)

class ScheduleTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <Schedule node={this.props.data.contentfulSchedule}></Schedule>
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
        fluid (quality: 85) {
          src
          srcSet
          aspectRatio
          sizes
        }
      }
      welcome
      body {
        childMarkdownRemark {
          html
        }
      }
      node_locale
    }
  }
`
