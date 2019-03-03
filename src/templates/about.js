import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import { ContentGrid, ContentContainer } from '../components/layout/ContentGrid'
import Layout from "../components/layout"
import Banner from '../components/Banner'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AboutTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <Banner banner={data.contentfulAbout.banner} heading={data.contentfulAbout.heading} locale={data.contentfulAbout.node_locale} />
        <ContentGrid>
          <ContentContainer>
            <span>Some ABOUT detail...</span>
          </ContentContainer>
        </ContentGrid>
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
      banner {
        title
        fluid {
          src
          srcSet
          aspectRatio
          sizes
        }
      }
      node_locale
    }
  }
`
