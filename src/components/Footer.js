import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

const Footer = (props) => (
  <footer>
    <h4>Footer</h4>
    <div>
      <Link to="/">
        Ahimsa - Shivam Yoga Center
      </Link>
    </div>
  </footer>
)

Footer.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default Footer;