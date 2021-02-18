const { model, Schema } = require("mongoose");

const filmSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  imageUrl: String,
  sourceUrl: String,
  comments: [{ body: String, username: String, createdAt: String }],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Film", filmSchema);
