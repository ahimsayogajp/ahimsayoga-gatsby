import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  grid-area: center;
  display: inline;
  line-height: 100px;
  font-size: 14px;
  font-weight: bold;
  ul {
    margin: auto;
    text-align: center;
  }
  li {
    display: inline;
    padding: 1em;
  }
  a {
    color: #333;
    text-decoration: none;
    &:hover, &[aria-current] {
      color: #f76b6a;
    }
  }
`

const MainNav = (props) => (
  <Nav className="main">
    <ul>
      <li>
        <Link to={'/' + props.locale + '/'}>{props.messages.home}</Link>
      </li>
      <li>
        <Link to={'/' + props.locale + '/about'}>{props.messages.about}</Link>
      </li>
      <li>
        <Link to={'/' + props.locale + '/schedule'}>{props.messages.schedule}</Link>
      </li>
      <li>
        <Link to={'/' + props.locale + '/contact'}>{props.messages.contact}</Link>
      </li>
    </ul>
  </Nav>
)

MainNav.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default MainNav;