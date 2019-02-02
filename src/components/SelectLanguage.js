import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import styled from "styled-components"

const Nav = styled.nav`
display: inline;
  text-align: center;
`

const Li = styled.li`
  display: inline;
  padding: 1em;
`

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey}>
      <Li selected={lang.selected}>
        {lang.langKey}
      </Li>
    </Link>
  );

  return (
    <Nav className="language-switcher">
        <FormattedMessage id="selectLanguage" />
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