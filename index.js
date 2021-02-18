const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { MONGO } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGO, { useNewUrlParser: true }).then(() => {
  console.log("mogodb connected");
  return server.listen({ port: 5000 }).then((res) => {
    console.log(`server running at ${res.url}`);
  });
});
