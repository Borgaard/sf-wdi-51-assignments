const mongoose = require('mongoose');
Schema = mongoose.Schema;

const FoodSchema = new Schema ({
    name: String,
    ingredients: [{
        type: Schema.type.objectId,
        ref: 'Ingredient'
    }]
});

const Food = monggose.module('Food', FoodSchema);
module.exports = Food;