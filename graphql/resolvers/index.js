const filmsResolvers = require("./films");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...filmsResolvers.Query,
  },
};
