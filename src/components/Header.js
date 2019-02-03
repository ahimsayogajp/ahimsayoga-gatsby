import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from 'styled-components'

import SelectLanguage from './SelectLanguage';
import MainNav from './MainNav'
import logo from '../images/logo.png';

const Head = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 0.3fr 0.7fr 3fr 0.7fr 0.3fr;;
  grid-template-rows: 1fr;
  grid-template-areas: "left-gutter logo nav lang right-gutter";
`

const Logo = styled.div`
  grid-area: logo;
`

const NavContainer = styled.div`
  grid-area: nav;
`

const LangContainer = styled.div`
  grid-area: lang;
`

const Header = (props) => (
  <Head>
    <Logo>
      <Link to="/">
        <img src={logo} alt="Ahimsa - Shivam Yoga Center" />
      </Link>
    </Logo>
    <NavContainer>
      <MainNav locale={props.locale} messages={props.messages} />
    </NavContainer>
    <LangContainer>
      <SelectLanguage langs={props.langs} />
    </LangContainer>
  </Head>
)

Header.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default Header;