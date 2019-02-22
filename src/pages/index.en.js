import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import ContentGrid from '../components/layout/ContentGrid'
import Layout from "../components/layout.js"

import { device } from '../device'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const MasterContainer = styled.section`
  width: 100vw;
  position: relative;
`

const HeroGrid = styled(ContentGrid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
`

const HeadingContainer = styled.div`
  grid-area: center;
  align-items: center;
  position: relative;
`

const HeadingContainerInner = styled.div`
  position: absolute;
  top: 4%;
  h1, strong {
    color: #fff;
  }
  strong {
    font-family: Alex Brush;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
  }
  h1 {
    font-size: 28px;
  }
  @media ${device.mobileL} {
    top: 7%;
  }

  @media ${device.tablet} {
    top: 10%;
    strong {
      font-size: 30px;
    }
    h1 {
      font-size: 34px;
    }
  }

  @media ${device.laptop} {
    top: 17%;
    strong {
      font-size: 33px;
    }
    h1 {
      font-size: 38px;
    }
  }
  @media ${device.laptopL} {
    top: 20%;
    strong {
      font-size: 36px;
    }
    h1 {
      font-size: 42px;
    }
  }
`

const Image = styled(Img)`
  left: 0;
  top: 1px;
  z-index: -1;
`

const MainContentGrid = styled(ContentGrid)`
  padding-top: 100px;
  margin-bottom: 70px;
`

const ContentContainer = styled.div`
  grid-area: center;
  font-family: 'Montserrat',sans-serif;
  font-size: 24px;
  padding-bottom: 75px;
  border-bottom: 1px solid #eee;
`

const Home = ({ node }) => (
  <MasterContainer>
    <Image
      key={node.hero.fluid.src}
      alt={node.hero.title}
      fluid={node.hero.fluid}
      aspectRatio={node.hero.aspectRatio}
      sizes={node.hero.sizes}
    />
    <HeroGrid>
      <HeadingContainer>
        <HeadingContainerInner>
          <strong>{node.welcome}</strong>
          <h1>{node.heading}</h1>
        </HeadingContainerInner>
      </HeadingContainer>
    </HeroGrid>
    <MainContentGrid>
      <ContentContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: node.description.childMarkdownRemark.html
          }}
        />
      </ContentContainer>
    </MainContentGrid>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12838.985192216147!2d136.6262087!3d36.4395169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc3d8bd79e42849d!2sAhimsa+-+Shivam+Yoga+Center!5e0!3m2!1sen!2sjp!4v1546502012340" width="100%" height="395" frameBorder="0" style={{border: "0px"}} allowFullScreen="">
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
  query PageEnQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    page: contentfulHome(node_locale: { eq: "en" }, slug: { eq: "home"}) {
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
