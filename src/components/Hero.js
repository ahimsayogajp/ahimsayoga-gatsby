import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"

import { ContentGrid } from '../components/layout/ContentGrid'

import { device } from '../theme/breakpoints'

const RelativeContainer = styled.div`
  position: relative;
`

const HeroGrid = styled(ContentGrid)`
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
  top: 11em;
  h1, strong {
    color: ${props => props.theme.colors.textHero};
    font-style: normal;
    line-height: 25px;
  }
  strong {
    font-size: 25px;
    font-family: ${props => props.theme.fonts.welcomeDefault};
    font-weight: 400;
  }
  h1 {
    font-size: 30px;
    font-family: ${props => props.theme.fonts.textHeader};
    font-weight: 550;
    letter-spacing: 0.2px;
    line-height: 1em;
  }

  @media ${device.mobileM} {
    strong {
      font-size: 28px;
    }
    h1 {
      font-size: 32px;
    }
  }

  @media ${device.mobileL} {
    strong {
      font-size: 30px;
    }
    h1 {
      font-size: 34px;
    }
  }

  @media ${device.tablet} {
    top: 13em;
    strong {
      font-size: 34px;
    }
    h1 {
      font-size: 39px;
    }
  }

  @media ${device.laptop} {
    top: 20em;
    strong {
      font-size: 38px;
    }
    h1 {
      font-size: 43px;
    }
  }
  @media ${device.laptopL} {
    top: 24em;
    strong {
      font-size: 42px;
    }
    h1 {
      font-size: 52px;
    }
  }
`

const Image = styled(Img)`
  left: 0;
  top: 1px;
  z-index: -1;
  min-height: 300px;
`

const Hero = (props) => (
  <RelativeContainer>
    <Image
      key={props.hero.fluid.src}
      alt={props.hero.title}
      fluid={props.hero.fluid}
      aspectRatio={props.hero.aspectRatio}
      sizes={props.hero.sizes}
    />
    <HeroGrid>
      <HeadingContainer>
        <HeadingContainerInner locale={props.locale}>
          <strong>{props.welcome}</strong>
          <h1>{props.heading}</h1>
        </HeadingContainerInner>
      </HeadingContainer>
    </HeroGrid>
  </RelativeContainer>
)

Hero.propTypes = {
  hero: PropTypes.object,
  welcome: PropTypes.string,
  heading: PropTypes.string,
  locale: PropTypes.string
}

export default Hero;