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

class ContactTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <Banner banner={data.contentfulContact.banner} heading={data.contentfulContact.heading} locale={data.contentfulContact.node_locale} />
        <ContentGrid>
          <ContentContainer>
            <span>Some CONTACT detail...</span>
          </ContentContainer>
        </ContentGrid>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12838.985192216147!2d136.6262087!3d36.4395169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc3d8bd79e42849d!2sAhimsa+-+Shivam+Yoga+Center!5e0!3m2!1sen!2sjp!4v1550923626087" width="100%" height="395" frameBorder="0" style={{border: "0"}} allowFullScreen>
        </iframe>
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
