import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.section`
  margin-top: 150px;
  margin-bottom: 100px;
  text-align: center;
`

const Intro = styled.div`
  color: ${props => props.theme.colors.textPromoIntro};
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
      box-shadow: -2px 20px 20px ${props => props.theme.colors.shadowCtaHover};
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