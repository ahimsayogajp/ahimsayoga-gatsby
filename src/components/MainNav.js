import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  grid-area: center;
  display: inline;
`

const Ul = styled.ul`
  margin: auto;
  text-align: center;
`

const Li = styled.li`
  display: inline;
  padding: 1em;
`

const MainNav = (props) => (
  <Nav className="main">
    <Ul>
      <Li>
        <Link to={'/' + props.locale + '/'}>{props.messages.home}</Link>
      </Li>
      <Li>
        <Link to={'/' + props.locale + '/about'}>{props.messages.about}</Link>
      </Li>
      <Li>
        <Link to={'/' + props.locale + '/schedule'}>{props.messages.schedule}</Link>
      </Li>
      <Li>
        <Link to={'/' + props.locale + '/contact'}>{props.messages.contact}</Link>
      </Li>
    </Ul>
  </Nav>
)

MainNav.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default MainNav;