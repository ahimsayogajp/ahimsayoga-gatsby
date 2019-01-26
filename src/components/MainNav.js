import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

const MainNav = (props) => (
  <nav>
    <ul>
      <li>
        <Link to={'/' + props.locale + '/'}>Home</Link>
      </li>
      <li>
        <Link to={'/' + props.locale + '/about'}>About</Link>
      </li>
      <li>
        <Link to={'/' + props.locale + '/schedule'}>Schedule</Link>
      </li>
      <li>
        <Link to={'/' + props.locale + '/contact'}>Contact</Link>
      </li>
    </ul>
  </nav>
)

MainNav.propTypes = {
  locale: PropTypes.string
}

export default MainNav;