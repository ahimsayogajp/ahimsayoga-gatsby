import React from 'react'
import PropTypes from 'prop-types'

const Promo = (props) => (
  <section>
    {console.log(props)}
    <div>{props.promoIntro}</div>
    <h3>{props.promoTitle}</h3>
    <div><a href={'/' + props.locale + '/' + props.promoUri}>{props.promoCta}</a></div>
  </section>
)

Promo.propTypes = {
  promoTitle: PropTypes.string,
  promoIntro: PropTypes.string,
  promoCta: PropTypes.string,
  promoUri: PropTypes.string,
  locale: PropTypes.string
}

export default Promo;