import React, { Component } from 'react'
import Link from "gatsby-link"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from 'styled-theming';

import { colors } from '../theme/colors'
import { fonts } from '../theme/fonts'
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
    color: ${props => props.theme.colors.bodyDefault};
  }
  h1 {
    margin-block-start: 0;
  }
  h3 {
    color: ${props => props.theme.colors.headingDefault};
  }
  p {
    line-height: 1.5em;
  }
  a {
    color: ${props => props.theme.colors.linkDefault};
    &:hover {
      color: ${props => props.theme.colors.linkHoverDefault};
    }
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
  font-family: ${props => (props.theme.locale == 'ja') ? props.theme.fonts.bodyJapanese : props.theme.fonts.bodyDefault};
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
        <ThemeProvider theme={{ locale: this.langKey, colors: colors, fonts: fonts }}>
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
                { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato|Roboto|Noto+Sans+JP|Montserrat:400,700' },
                { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/earlyaccess/hannari.css' }
              ]}
            />
            <Header langsMenu={this.langsMenu} locale={this.langKey} />
            <Main>
              {this.children}
            </Main>
            <Footer locale={this.langKey} />
          </Container>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default Layout
