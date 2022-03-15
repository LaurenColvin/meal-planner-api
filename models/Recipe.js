// recipe model
const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  url: String,
  imgUrl: String,
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }],
});

module.exports = mongoose.model("Recipe", recipeSchema);