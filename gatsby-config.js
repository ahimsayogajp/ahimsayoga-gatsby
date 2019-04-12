require('dotenv').config()

const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    siteUrl: `https://ahimsayoga.jp`,
    title: `Ahimsa - Shivam Yoga Center`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
