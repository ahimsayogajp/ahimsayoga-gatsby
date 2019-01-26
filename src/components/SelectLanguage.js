import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey}>
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <section>
      <ul>
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;