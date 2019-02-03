import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components'

const Nav = styled.nav`
  display: inline;
  line-height: 100px;
  ul {
    margin: 0
  }
  li {
    display: inline;
    padding: 0 0 0 0.5em;
  }
  a {
    text-decoration: none;
    letter-spacing: 0.2px;
    font-size: 14px;
    font-weight: bold;
    color: #696969;
    &:hover {
      color: #f76b6a;
    }
    &[aria-current] {
      color: #333;
    }
  }
`

/*
 * Rather than hide this, a better way would
 * be a tooltip and even in the unselected lang.
 * But, it's not recommended to call the API
 * directly, so consider removing entirely also.
 */
const LangSwitchMsg = styled.div`
  display: none;
`

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey}>
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <Nav className="language-switcher">
      <LangSwitchMsg>
        <FormattedMessage id="selectLanguage" />
      </LangSwitchMsg>
      <ul>
        {links}
      </ul>
    </Nav>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;