//ingredients model
const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
  amount: Number,
  measurement: String,
  item: String,
});

module.exports = mongoose.model("Ingredients", ingredientsSchema);