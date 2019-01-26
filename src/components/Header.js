import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import SelectLanguage from './SelectLanguage';
import MainNav from './MainNav'

const Header = (props) => (
  <div>
    <div>
      <h1>
        <Link to="/">
          Ahimsa - Shivam Yoga Center
        </Link>
      </h1>
      <MainNav locale={props.locale} />
      <SelectLanguage langs={props.langs} />
    </div>
  </div>
)

MainNav.propTypes = {
  locale: PropTypes.string
}

export default Header;