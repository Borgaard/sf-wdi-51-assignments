// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

const ingredients_list = {
    name:"Mild Cheddar Cheese",
    quantity:"8oz",
    importance:"High"
  };


const dirtyMacAndCheese = {
  name:"Dirty Mac & Cheese",
  calories:5000,
  ingredients:[]
};



db.Recipe.remove({}, (err, recipes) =>{
  db.Ingredient.remove({}, (err,ingreds) =>{});
  db.Ingredient.create( ingredients_list , (err, savedIngreds) => {
      if (err) {
        return console.log(err);
      } else {
        console.log('ingredients were saved.');
        db.Recipe.create(dirtyMacAndCheese, (err, savedRecipe) => {
          if (err) {
            return console.log(err);
          }
          savedRecipe.ingredients.push(savedIngreds);   // associated!
          savedRecipe.save( (err, savedDirtyCheese) => {
            if (err) {
              return console.log(err);
            } else {
              console.log('cheesyQuiche food is ', savedDirtyCheese);
            }
          });
        })
      }
    });
  });

