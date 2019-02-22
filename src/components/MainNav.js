import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { device } from '../device'

const Nav = styled.nav`
  grid-area: center;
  display: inline;
  font-size: 14px;
  font-weight: bold;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  li a {
    display: block;
    color: #333;
    padding: 20px 20px;
    text-decoration: none;
    &:hover, &[aria-current] {
      color: #f76b6a;
    }
  }

  li a:hover,
  .menu-btn:hover {
    background-color: #f4f4f4;
  }

  /* menu */

  .menu {
    max-height: 0;
    transition: max-height .2s ease-out;
  }

  /* menu icon */

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 28px 0;
    position: relative;
    user-select: none;
    margin-top: 20px;
    padding-right: 20px;
  }

  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 265px;
    width: 100vw;
  }

  .menu-btn:checked ~ .menu-icon {
    float: right;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  @media ${device.laptop} {
    ul {
      margin: auto;
      text-align: center;
      line-height: 100px;
    }
    li {
      display: inline;
    }
    li a {
      padding: 20px 30px;
      display: inline;
    }
    li a:hover {
      background-color: transparent;
    }
    .menu {
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  }
`

const MainNav = (props) => (
  <Nav className="main">
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
    <ul className="menu">
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