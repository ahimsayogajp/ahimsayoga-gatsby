import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from "styled-components"

import SelectLanguage from './SelectLanguage';
import MainNav from './MainNav'
import logo from '../images/logo.png';

const Top = styled.header`
  grid-area: header;
`

const Header = (props) => (
  <Top>
    <div>
      <Link to="/">
        <img src={logo} alt="Ahimsa - Shivam Yoga Center" />
      </Link>
      <MainNav locale={props.locale} messages={props.messages} />
      <SelectLanguage langs={props.langs} />
    </div>
  </Top>
)

Header.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default Header;