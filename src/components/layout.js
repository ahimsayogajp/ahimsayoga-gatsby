import React, { Component } from 'react'
import Link from "gatsby-link"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Header from './Header'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    const data = this.props.data;
    const location = this.props.location;
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(langs, this.langKey, getUrlForLang(this.homeLink, url));
  }
  render() {
    return (
      <IntlProvider
        locale={this.langKey}
      >
        <div>
          <Helmet
            title="Ahimsa - Shivam Yoga Center"
            meta={[
              { name: 'description', content: 'ヨガ教室：　Kanazawa 金沢　ヨガ, Nomi 能美市' },
              { name: 'keywords', content: 'ヨガ, ヨガ教室, ヨガ能美市, ヨガ金沢' },
            ]}
          />
          <Header langs={this.langsMenu} locale={this.langKey} />
          <div>
            <Link to="/">
              <h3>
                Example
              </h3>
            </Link>
            {this.children}
            <hr />
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default TemplateWrapper
