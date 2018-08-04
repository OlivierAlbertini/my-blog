module.exports = {
  siteMetadata: {
    title: 'Async',
    description: 'Find Articles about new technologies like NodeJS, RabbitMQ, Elasticsearch',
    keywords: 'RabbitMQ, ZeroMQ, NodeJS, Elasticsearch'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3twlxsx36s9a',
        accessToken: '28278d0cd3ec0c16be5e650d46c4c1440c37e16af4857942dc96f7e72bebb0d9'
      }
    }],
}