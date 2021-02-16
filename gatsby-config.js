module.exports = {
  siteMetadata: {
    title: "todayilearn",
    description: "compilation of TIL",
    author: "ry",
    siteUrl: "https://todayilearn.rongying.co"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require('sass'),
        additionalData: `@import "${__dirname}/src/styles/styles";`,
      }
    },
    "gatsby-plugin-pnpm",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-highlight-code",
            options: {
              terminal: "carbon"
            }
          },
        ],
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts",
      },
      __key: "posts",
    },
  ],
};
