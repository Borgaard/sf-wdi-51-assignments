const mongoose = require('mongoose');
Schema = mongoose.Schema;

const IngredientSchema= new Schema({
    title: String,
    origin: String
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;