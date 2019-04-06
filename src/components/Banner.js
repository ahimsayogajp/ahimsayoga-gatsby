import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"

import { ContentGrid } from '../components/layout/ContentGrid'

import { device } from '../theme/breakpoints'

const RelativeContainer = styled.div`
  position: relative;
`

const BannerGrid = styled(ContentGrid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
`

const HeadingContainer = styled.div`
  grid-area: center;
  align-items: center;
  position: relative;
`

const HeadingContainerInner = styled.div`
  position: absolute;
  top: 0.4em;
  left: 50%;
  margin-left: -50%;
  h1, strong, a, div {
    color: ${props => props.theme.colors.textBanner};
  }
  strong {
    font-size: ${props => (props.locale == 'ja') ? '30px' : '28px'};
    font-family: ${props => (props.locale == 'ja') ? props.theme.fonts.welcomeJapanese : props.theme.fonts.headingDefault};
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    font-size: ${props => (props.locale == 'ja') ? '30px' : '28px'};
    font-family: ${props => (props.locale == 'ja') ? props.theme.fonts.headingJapanese : 'inherit'};
  }
  a, div {
    text-transform: uppercase;
    display: inline-block;
    .root {
      padding-right: 10px;
    }
    .child {
      padding-left: 10px;
    }
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${device.mobileM} {
    top: 2em;
    strong {
      font-size: 18px;
    }
    h1 {
      font-size: 22px;
    }
  }

  @media ${device.mobileL} {
    top: 2em;
    strong {
      font-size: 21px;
    }
    h1 {
      font-size: 24px;
    }
  }

  @media ${device.tablet} {
    top: 5em;
    strong {
      font-size: 30px;
    }
    h1 {
      font-size: 34px;
    }
  }

  @media ${device.laptop} {
    top: 8em;
    strong {
      font-size: 33px;
    }
    h1 {
      font-size: 38px;
    }
  }
  @media ${device.laptopL} {
    top: 14em;
    strong {
      font-size: 44px;
    }
    h1 {
      font-size: 50px;
    }
  }
`

const Image = styled(Img)`
  left: 0;
  top: 1px;
  z-index: -1;
  min-height: 200px;
`

const Banner = (props) => (
  <RelativeContainer>
    <Image
      key={props.banner.fluid.src}
      alt={props.banner.title}
      fluid={props.banner.fluid}
      aspectRatio={props.banner.aspectRatio}
      sizes={props.banner.sizes}
    />
    <BannerGrid>
      <HeadingContainer>
        <HeadingContainerInner locale={props.locale}>
          <h1>{props.heading}</h1>
          <nav>
            <div itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <a href="/" itemProp="url">
                <span className="root" itemProp="title">Home</span>
              </a> /
              <div itemProp="child" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                <span className="child" itemProp="title">{props.heading}</span>
              </div>
            </div>
          </nav>
        </HeadingContainerInner>
      </HeadingContainer>
    </BannerGrid>
  </RelativeContainer>
)

Banner.propTypes = {
  banner: PropTypes.object,
  heading: PropTypes.string,
  locale: PropTypes.string
}

export default Banner;