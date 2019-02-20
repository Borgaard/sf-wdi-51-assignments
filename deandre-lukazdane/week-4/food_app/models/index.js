const mongoose = require('mongoose');
const Food = require('./food');
const Ingredient = require('./ingredient');

 mongoose.connect('mongodb://localhost/food-app', {useNewUrlParser: true});

 exports.Food = Food;
 exports.Ingredient = Ingredient;