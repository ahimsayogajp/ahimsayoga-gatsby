import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n';

import SEO from "../components/seo"

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);

      navigate(homeUrl);
    }
  }

  render() {
    return (<SEO title="Ahimsa Shivam Yoga Center" />);
  }
}

export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
