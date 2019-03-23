import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.section`
  margin-top: 75px;
  text-align: center;
`

const Intro = styled.div`
  color: #a6afd1;
  text-transform: uppercase;
  font-size: 14px;
`

const Title = styled.h3`
  font-size: 34px;
  margin: 16px auto 42px auto;
`

const Cta = styled.div`
  a {
    color: ${props => props.theme.colors.linkCta};
    background-color: ${props => props.theme.colors.backgroundCtaLink};
    font-size: 12px;
    padding: 11px 16px;
    border-radius: 2em;
    text-decoration: none;
    &:focus, &:hover{
      border: 1px solid transparent;
      box-shadow: -2px 20px 20px rgba(51,51,51,0.2);
    }
  }
`

const Promo = (props) => (
  <Container>
    <Intro>{props.promoIntro}</Intro>
    <Title>{props.promoTitle}</Title>
    <Cta><a href={'/' + props.locale + '/' + props.promoUri}>{props.promoCta}</a></Cta>
  </Container>
)

Promo.propTypes = {
  promoTitle: PropTypes.string,
  promoIntro: PropTypes.string,
  promoCta: PropTypes.string,
  promoUri: PropTypes.string,
  locale: PropTypes.string
}

export default Promo;