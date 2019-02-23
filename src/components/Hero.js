import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"

import ContentGrid from '../components/layout/ContentGrid'

import { device } from '../breakpoints'

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
  top: 5em;
  h1, strong {
    color: #fff;
  }
  strong {
    font-family: ${props => (props.locale == 'ja') ? 'Hannari' : 'Alex Brush'};
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
  }
  h1 {
    font-size: 24px;
    font-family: ${props => (props.locale == 'ja') ? 'Noto Sans JP' : 'inherit'};
  }

  @media ${device.mobileL} {
    top: 7em;
    strong {
      font-size: 23px;
    }
    h1 {
      font-size: 27px;
    }
  }

  @media ${device.tablet} {
    top: 10em;
    strong {
      font-size: 30px;
    }
    h1 {
      font-size: 34px;
    }
  }

  @media ${device.laptop} {
    top: 14em;
    strong {
      font-size: 33px;
    }
    h1 {
      font-size: 38px;
    }
  }
  @media ${device.laptopL} {
    top: 18em;
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
`

const Hero = (props) => (
  <div>
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
  </div>
)

Hero.propTypes = {
  hero: PropTypes.object,
  welcome: PropTypes.string,
  heading: PropTypes.string
}

export default Hero;