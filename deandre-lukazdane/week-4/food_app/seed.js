const db = require('./models');

/* make a new Ingredient document */
const cheddar = {
    title: 'cheddar cheese',
    origin: 'Wisconsin'
   };

/* make a new Food document */
const cheesyQuiche = {
    name: 'Quiche',
    ingredients: []
   };

   db.Food.findOne({ name: 'Quice'}, (err, foundFood) => {
       if(err)return console.log(err);

       db.Ingredient.create(egg, (err, newIngredient)  => {
        if(err)return console.log(err);

        foundFood.ingredients.push(newIngredient);
        foundFood.save((err, newQuiche) => {
            if(err) return console.log(err);
            console.log(foundFood);
        })

       })
   })
   db.Ingredient.create(cheddar, (err, newIngredient) => {
   if(err) return console.log(err);

   db.Food.create(cheeseyQuiche, (err, newFood) => {
       if(err) return console.log(err);

       newFood.ingredients.push(newIngredient);
       newFood.save((err, savedFood) => {
           if(err) return console.log(err);

           console.log(savedFood);
       })
   })
})