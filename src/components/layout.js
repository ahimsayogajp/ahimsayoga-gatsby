import React, { Component } from 'react'
import Link from "gatsby-link"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';

import styled, { createGlobalStyle } from "styled-components"

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import ja from 'react-intl/locale-data/ja';
import 'intl/locale-data/jsonp/ja';

import Header from './Header'
import Footer from './Footer'
import ContentGrid from '../components/layout/ContentGrid';
import favicon from '../images/favicon.png';

// add concatenated locale data
addLocaleData([...en, ...ja]);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 14px;
    font-family: "Lato",Helvetica,Arial,sans-serif;
    color: #696969;
  }
  h1 {
    margin-block-start: 0;
  }
`

// Overall Grid: https://www.layoutit.com/grid/ysWOYND

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "header" "main" "footer";
`

const Main = styled.main`
  flex-grow: 1;
  grid-area: main;
`

class Layout extends Component {
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
          <React.Fragment>
            <GlobalStyle />
          </React.Fragment>
          <Helmet
            title="Ahimsa - Shivam Yoga Center"
            meta={[
              { name: 'description', content: 'ヨガ教室：　Kanazawa 金沢　ヨガ, Nomi 能美市' },
              { name: 'keywords', content: 'ヨガ, ヨガ教室, ヨガ能美市, ヨガ金沢' },
            ]}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
              { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Alex+Brush' },
              { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
              { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/earlyaccess/hannari.css' },
              { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' }
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

export default Layout
