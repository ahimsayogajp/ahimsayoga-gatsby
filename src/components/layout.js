import React, { Component } from 'react'
import Link from "gatsby-link"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';
import styled from 'styled-components'

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import ja from 'react-intl/locale-data/ja';
import 'intl/locale-data/jsonp/ja';

import Header from './Header'
import Footer from './Footer'
import favicon from '../images/favicon.png';

// add concatenated locale data
addLocaleData([...en, ...ja]);

// Overall Grid: https://www.layoutit.com/grid/ysWOYND

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "header" "main" "footer";
`

const Main = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 0.3fr 0.6fr 3.2fr 0.6fr 0.3fr;
  grid-template-rows: auto;
  grid-template-areas: "left-gutter left-sidebar center right-sidebar right-gutter";
`

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

    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    this.i18nMessages = require(`../data/messages/${this.langKey}`);
  }
  render() {
    return (
      <IntlProvider
        locale={this.langKey}
        messages={this.i18nMessages}
      >
        <Container>
          <Helmet
            title="Ahimsa - Shivam Yoga Center"
            meta={[
              { name: 'description', content: 'ヨガ教室：　Kanazawa 金沢　ヨガ, Nomi 能美市' },
              { name: 'keywords', content: 'ヨガ, ヨガ教室, ヨガ能美市, ヨガ金沢' },
            ]}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
            ]}
          />
          <Header langs={this.langsMenu} locale={this.langKey} messages={this.i18nMessages} />
          <Main>
            {this.children}
          </Main>
          <Footer langs={this.langsMenu} locale={this.langKey} messages={this.i18nMessages} />
        </Container>
      </IntlProvider>
    );
  }
}

export default TemplateWrapper
