import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import SelectLanguage from './SelectLanguage'
import MainNav from './MainNav'
import HeaderGrid from './layout/HeaderGrid'
import logo from '../images/logo.png'

import { device } from '../theme/breakpoints'


const Head = styled(HeaderGrid)`
  grid-area: header;
  box-shadow: 0 1px 5px rgba(0,0,0,0.46);
  font-family: ${props => props.theme.fonts.textHeader};
  text-transform: uppercase;
`

const Logo = styled.div`
  grid-area: center;
  padding-top: 20px;
  text-align: center;
  img {
    max-height: 55px;
  }
  @media ${device.laptop} {
    grid-area: left;
    img {
      max-height: 65px;
    }
  }
`

const NavContainer = styled.div`
  grid-area: left;
  @media ${device.laptop} {
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
      <MainNav locale={props.locale} location={props.location} />
    </NavContainer>
    <LangContainer>
      <SelectLanguage langsMenu={props.langsMenu} />
    </LangContainer>
  </Head>
)

Header.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string,
  location: PropTypes.object
}

export default Header;