import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import { ContentGrid, ContentContainer } from '../components/layout/ContentGrid'
import Layout from "../components/layout"
import Hero from '../components/Hero'

import { device } from '../breakpoints'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const MasterContainer = styled.section`
  width: 100vw;
  position: relative;
`

const MainContentGrid = styled(ContentGrid)`
  padding-top: 100px;
  margin-bottom: 70px;
`

const Statement = styled.div`
  color: #333;
  text-align: center;
  padding-bottom: 75px;
  border-bottom: 1px solid #eee;
`

const Home = ({ node }) => (
  <MasterContainer>
    <Hero hero={node.hero} welcome={node.welcome} heading={node.heading} locale={node.node_locale} />
    <MainContentGrid>
      <ContentContainer>
        <Statement
          dangerouslySetInnerHTML={{
            __html: node.description.childMarkdownRemark.html
          }}
        />
      </ContentContainer>
    </MainContentGrid>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12838.985192216147!2d136.6262087!3d36.4395169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc3d8bd79e42849d!2sAhimsa+-+Shivam+Yoga+Center!5e0!3m2!1sen!2sjp!4v1550923626087" width="100%" height="395" frameBorder="0" style={{border: "0"}} allowFullScreen>
    </iframe>
  </MasterContainer>
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
      hero {
        title
        fluid {
          src
          srcSet
          aspectRatio
          sizes
        }
      }
      welcome
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
