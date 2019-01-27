import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import SelectLanguage from './SelectLanguage';
import MainNav from './MainNav'

const Header = (props) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          Ahimsa - Shivam Yoga Center
        </Link>
      </h1>
      <MainNav locale={props.locale} messages={props.messages} />
      <SelectLanguage langs={props.langs} />
    </div>
  </header>
)

Header.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default Header;