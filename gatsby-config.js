require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Goals",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: `appIhwXXgds9RGvVd`,
            tableName: `Get Up`,
          },
          {
            baseId: `appIhwXXgds9RGvVd`,
            tableName: `Scripture Study`,
          },
          {
            baseId: `appIhwXXgds9RGvVd`,
            tableName: `Temple or Family History`,
          },
          {
            baseId: `appIhwXXgds9RGvVd`,
            tableName: `Journal`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Goals`,
        short_name: `Goals`,
        description: `Goal tracking dashboard.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        start_url: `/`,
        background_color: `#38bdf8`,
        theme_color: `#fff`,
      },
    },
  ],
};
