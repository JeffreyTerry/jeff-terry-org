import { LIGHT_THEME, DARK_THEME } from './src/utils/constants';

export const siteMetadata = {
  title: 'JeffTerry.org',
  description: "Jeff Terry's personal website.",
  author: 'Jeffrey Terry',
  siteUrl: 'https://jeffterry.org',
};

export const plugins = [
  {
    resolve: `gatsby-styled-components-dark-mode`,
    options: {
      light: LIGHT_THEME,
      dark: DARK_THEME,
    },
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-190157116-1',
      head: true,
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  'gatsby-plugin-fontawesome-css',
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Montserrat:500,700', 'Mulish:400,700'],
      },
    },
  },
];
