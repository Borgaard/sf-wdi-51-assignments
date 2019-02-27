const mongoose = require('mongoose');
Schema = mongoose.Schema;

const IngredientSchema = new Schema({
      name:String,
      quantity:String,
      importance:String
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema)

module.exports = Ingredient;
