import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import styled from "styled-components"

import { ContentGrid, ContentContainer } from '../components/layout/ContentGrid'
import Layout from "../components/layout"
import Hero from '../components/Hero'
import Promo from '../components/Promo'
import SEO from "../components/seo"

import { device } from '../theme/breakpoints'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const HomeContainer = styled.section`
  /* @media ${device.laptop} {
    background: ${props => `url(${props.backgroundLeft}) left 65% no-repeat, url(${props.backgroundRight}) right 65% no-repeat`};
    background-size: 40em auto, 40em auto;
  } */
`

const Statement = styled.div`
  color: ${props => props.theme.colors.headingDefault};
  text-align: center;
  padding-bottom: 75px;
  border-bottom: 1px solid ${props => props.theme.colors.borderDefault};
  font-size: 24px;
  font-weight: 600;
  p {
    margin-block-start: 0;
  }
`

const Welcome = styled.div`
  font-size: 34px;
  font-family: ${props => props.theme.fonts.headingDefault};
  color: ${props => props.theme.colors.textWelcome};
  margin: 80px auto 30px auto;
  text-align: center;
`

const Schedule = styled.div`
  text-align: center;
`


const Home = ({ node }) => (
  <HomeContainer backgroundLeft={node.backgroundLeft.fluid.srcWebp} backgroundRight={node.backgroundRight.fluid.srcWebp}>
    <Hero hero={node.hero} welcome={node.welcome} heading={node.heading} locale={node.node_locale} />
    <ContentGrid>
      <ContentContainer>
        <Statement
          dangerouslySetInnerHTML={{
            __html: node.body.childMarkdownRemark.html
          }}
        />
        <Welcome>{node.scheduleHeading}</Welcome>
        <Schedule dangerouslySetInnerHTML={{
            __html: node.schedule.childMarkdownRemark.html
          }}
        />
        <Promo promoTitle={node.promoTitle}
          promoIntro={node.promoIntro}
          promoCta={node.promoCta}
          promoUri={node.promoUri}
          locale={node.node_locale} />
      </ContentContainer>
    </ContentGrid>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12838.985192216147!2d136.6262087!3d36.4395169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc3d8bd79e42849d!2sAhimsa+-+Shivam+Yoga+Center!5e0!3m2!1sen!2sjp!4v1550923626087" width="100%" height="395" frameBorder="0" style={{border: "0"}} allowFullScreen>
    </iframe>
  </HomeContainer>
)

class IndexPage extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <SEO title="Ahimsa Shivam Yoga Center" lang='en' />
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
      body {
        childMarkdownRemark {
          html
        }
      }
      backgroundLeft {
        title
        fluid {
          srcWebp
        }
      }
      backgroundRight {
        title
        fluid {
          srcWebp
        }
      }
      scheduleHeading
      schedule {
        childMarkdownRemark {
          html
        }
      }
      promoTitle
      promoIntro
      promoCta
      promoUri
    }
  }
`
