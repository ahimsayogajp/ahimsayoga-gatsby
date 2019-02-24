import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import ContentGrid from '../components/layout/ContentGrid'
import Layout from "../components/layout.js"

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

const ContentContainer = styled.div`
  grid-area: center;
  font-family: 'Montserrat',sans-serif;
  font-size: 24px;
  padding-bottom: 75px;
  border-bottom: 1px solid #eee;

  .description{
    color: #333;
    text-align: center;
  }
`

class ContactTemplate extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <MasterContainer>
          <MainContentGrid>
            <ContentContainer>
            <div>
              <h1>{data.contentfulContact.heading}</h1>
              <span>Some CONTACT detail...</span>
            </div>
            </ContentContainer>
          </MainContentGrid>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12838.985192216147!2d136.6262087!3d36.4395169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc3d8bd79e42849d!2sAhimsa+-+Shivam+Yoga+Center!5e0!3m2!1sen!2sjp!4v1550923626087" width="100%" height="395" frameBorder="0" style={{border: "0"}} allowFullScreen>
          </iframe>
        </MasterContainer>
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
    }
  }
`
