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
  grid-template-rows: auto;
  grid-template-areas: "left-gutter left center right right-gutter";
  box-shadow: 0 1px 5px rgba(0,0,0,0.46);
  font-family: 'Montserrat',sans-serif;
  text-transform: uppercase;
`

const Logo = styled.div`
  grid-area: center;
  padding-top: 20px;
  text-align: center;
  img {
    max-height: 55px;
  }
  @media (min-width: 58em) {
    grid-area: left;
    img {
      max-height: 65px;
    }
  }
`

const NavContainer = styled.div`
  grid-area: left;
  @media (min-width: 58em) {
    grid-area: center;
  }
`

const LangContainer = styled.div`
  grid-area: right;
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