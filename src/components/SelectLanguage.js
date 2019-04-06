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
    color: ${props => props.theme.colors.linkLangSwitcher};
    &:hover {
      color: ${props => props.theme.colors.linkLangSwitcherHover};
    }
    &[aria-current] {
      color: ${props => props.theme.colors.linkLangSwitcherActive};
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
  const links = props.langsMenu.map(lang =>
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
  langsMenu: PropTypes.array
};

export default SelectLanguage;