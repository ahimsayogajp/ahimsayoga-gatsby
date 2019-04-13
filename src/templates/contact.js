import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import { ContentGrid, ContentContainer } from '../components/layout/ContentGrid'
import Layout from "../components/layout"
import Banner from '../components/Banner'
import SEO from "../components/seo"

import { device } from '../theme/breakpoints'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const ContactContainer = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: 2rem;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left-column right-column";
  }
`

const ContactDetail = styled.div`
  @media ${device.laptop} {
    grid-area: right-column;
  }
  .welcome {
    font-size: 34px;
    font-family: ${props => props.theme.fonts.headingDefault};
    color: ${props => props.theme.colors.textWelcome};
    margin-bottom: 6px;
  }
  h2 {
    font-size: 48px;
    color: ${props => props.theme.colors.headingDefault};
    text-transform: uppercase;
    margin-top: 0;
  }
`

const Welcome = styled.div`
  font-size: 34px;
  font-family: ${props => props.theme.fonts.headingDefault};
  color: ${props => props.theme.colors.textWelcome};
  margin-bottom: 6px;
`

const Image = styled(Img)`
  @media ${device.laptop} {
    grid-area: left-column;
    margin-right: 50px;
  }
  @media ${device.laptopL} {
    margin-right: 100px;
  }
`

const Contact = ({ node }) => (
  <section>
    <Banner banner={node.banner} heading={node.heading} locale={node.node_locale} />
    <ContentGrid>
      <ContactContainer>
        <ContactDetail>
          <Welcome>{node.welcome}</Welcome>
          <h2>{node.heading}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: node.body.childMarkdownRemark.html
            }}
          />
        </ContactDetail>
        <Image
          key={node.image.fluid.src}
          alt={node.image.title}
          fluid={node.image.fluid}
          aspectRatio={node.image.aspectRatio}
          sizes={node.image.sizes}
        />
      </ContactContainer>
    </ContentGrid>
  </section>
)

class ContactTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <SEO title="Ahimsa Shivam Yoga Center" lang={node.node_locale} />
        <Contact node={this.props.data.contentfulContact}></Contact>
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
      image {
        title
        fluid {
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
