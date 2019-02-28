const mongoose = require('mongoose');
Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name:String,
    calories: Number,
    ingredients:[{
      type: Schema.Types.ObjectId,
      ref: 'Ingredient'
    }]
});

const Recipe = mongoose.model('Recipe',RecipeSchema);
 module.exports = Recipe;

