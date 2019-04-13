require('dotenv').config()

const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    siteUrl: `https://ahimsayoga.jp`,
    title: `Ahimsa - Shivam Yoga Center`,
    description: `ヨガ教室：　Kanazawa 金沢　ヨガ, Nomi 能美市`,
    keywords: `ヨガ, ヨガ教室, ヨガ能美市, ヨガ金沢`,
    author: `Ahimsa Life`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-98124033-1"
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sitemap`
  ],
}
