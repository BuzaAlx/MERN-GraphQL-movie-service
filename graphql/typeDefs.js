const { gql } = require("apollo-server");

module.exports = gql`
  type Film {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    imageUrl: String!
    sourceUrl: String!
  }

  type Query {
    getFilms: [Film]
  }
`;
