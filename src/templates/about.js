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
  font-family: ${props => props.theme.fonts.headingDefault};
  color: ${props => props.theme.colors.textWelcome};
  margin-bottom: 6px;
`

const SectionTitle = styled.h2`
  margin-top: 80px;
`

const InstructorsContainer = styled(ContentContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 2rem;
  padding-top: 20px;
`

const ProfileContainer = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.colors.borderDefault};
  border-radius: 5px;
  padding-top: 30px;
`

const Profile = styled.div`
  max-width: 60%;
  margin: auto;
  text-align: center;
`

const Image = styled(Img)`
  border-radius: 100%;
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
        <SectionTitle>{node.instructorsHeading}</SectionTitle>
        <InstructorsContainer>
          {node.instructors.map((instructor) =>
            <ProfileContainer key={instructor.name}>
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: instructor.bio.childMarkdownRemark.html
                }}
              /> */}
              <Profile>
                <Image
                  key={instructor.photo.fluid.src}
                  alt={instructor.photo.title}
                  fluid={instructor.photo.fluid}
                  aspectRatio={instructor.photo.aspectRatio}
                  sizes={instructor.photo.sizes}
                />
                <h3>{instructor.name}</h3>
              </Profile>
            </ProfileContainer>
          )}
        </InstructorsContainer>
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
      instructorsHeading
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
