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

const Welcome = styled.div`
  font-size: 34px;
  font-family: 'Alex Brush';
  color: #f76b6a;
  margin-bottom: 6px;
`

const About = ({ node }) => (
  <section>
    <Banner banner={node.banner} heading={node.heading} locale={node.node_locale} />
    <ContentGrid>
      <ContentContainer>
        <Welcome>{node.welcome}</Welcome>
        <div
          dangerouslySetInnerHTML={{
            __html: node.body.childMarkdownRemark.html
          }}
        />
        <div>
          {node.instructors.map((instructor) =>
            <div key={instructor.name}>
              <h2>{instructor.name}</h2>
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: instructor.bio.childMarkdownRemark.html
                }}
              /> */}
              <Img
                key={instructor.photo.fluid.src}
                alt={instructor.photo.title}
                fluid={instructor.photo.fluid}
                aspectRatio={instructor.photo.aspectRatio}
                sizes={instructor.photo.sizes}
              />
            </div>
          )}
        </div>
      </ContentContainer>
    </ContentGrid>
  </section>
)

class AboutTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <About node={this.props.data.contentfulAbout}></About>
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
      welcome
      body {
        childMarkdownRemark {
          html
        }
      }
      instructors {
        name
        photo {
          fluid {
            src
            srcSet
            aspectRatio
            sizes
          }
        }
        bio {
          childMarkdownRemark {
            html
          }
        }
      }
      node_locale
    }
  }
`
