const Film = require("../../models/Film");

module.exports = {
  Query: {
    async getFilms() {
      try {
        const films = await Film.find();
        return films;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
