export const siteMetadata = {
  title: 'JeffTerry.org',
};

export const plugins = [
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-190157116-1',
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
];
