/* eslint-disable prettier/prettier */
require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: 'Gatsby Boilerplate',
    siteUrl: 'https://www.null.com/',
    description: 'Gatsby Boilerplate',
    author: 'JoBenEtuk',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/svg/icon.svg',
        name: 'Gatsby Boilerplate',
        short_name: 'Gatsby Boilerplate',
        start_url: '/',
        background_color: '#FAC6B4',
        theme_color: '#000000',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
          quality: 100,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
  ],
}
