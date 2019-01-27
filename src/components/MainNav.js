import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

const MainNav = (props) => (
  <nav>
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
  </nav>
)

MainNav.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}

export default MainNav;