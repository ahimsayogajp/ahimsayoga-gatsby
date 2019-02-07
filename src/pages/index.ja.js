import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const MasterContainer = styled.section`
  width: 100vw;
  position: relative;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.6fr 3.2fr 0.6fr 0.3fr;
  grid-template-rows: auto;
  grid-template-areas: "left-gutter left-sidebar center right-sidebar right-gutter";
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
  top: 35%;
  h1, strong {
    color: #fff;
  }
  strong {
    font-family: Alex Brush;
    font-weight: 400;
    font-style: normal;
    font-size: 34px;
  }
  h1 {
    font-size: 48px;
  }
`

const Image = styled(Img)`
  left: 0;
  top: 1px;
  z-index: -1;
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
    <ContentGrid>
      <HeadingContainer>
        <HeadingContainerInner>
          <strong>{node.welcome}</strong>
          <h1>{node.heading}</h1>
        </HeadingContainerInner>
      </HeadingContainer>
    </ContentGrid>
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
    }
  }
`
