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

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getFilms: [Film]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;
