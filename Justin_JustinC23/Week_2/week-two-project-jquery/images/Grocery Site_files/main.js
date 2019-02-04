// ** When a category is clicked, your page should populate with images
// [ ] add event handlers to buttons to populate images
// ** When I click on a specific shopping item, the item should be added to my shopping cart.
// [ ] Add event handlers to shopping list items that adds to cart /see event delegation
// ** The shopping list will show all of the items that the user has currently selected.
// [ ] add

var shoppingcart = [];
// shopping cart items

 var pizzaItems = [
 {
    name: 'Zesty',
    img: 'images/zestypizza.png'
  },
  {
    name: "Sausauge",
    img: 'images/sausagepizza'
  },
  {
    name: "Deep Dish",
    img:  'images/deepdish'
  },
  {
    name: "Pepperoni",
    img: "images/pepperoni.jpg"
  },
]

    var beverageItems = [
   {
    name: 'Coke'
  },
{
  name: "Dr Pepper",
    img: 'images/drpepper.jpeg'
},
{
    name: "Sprite",
    img: "images/sprite.jpg"
 },
 {
    name: "7 Up",
    img: "images/7up"
  },
  {
    name: "Pepsi",
    img: "images/pepsi.jpg"
  },
]

    var magazineItems = [
   {
    name: 'Rolling Stone'
  },
{
  name: "Time",
    img: 'images/time.jpg'
},
{
    name: "National Geographic",
    img: "images/sprite.jpg"
 },
 {
    name: "ESPN",
    img: "images/espn.jpg"
  },
  {
    name: "Popular Science",
    img: "images/popsci.jpg"
  },
]
//Add click handlers to buttons
document.getElementById("pizza").addEventListener("click", function(){
  addShoppingItems('pizza');
})

document.getElementById("beverages").addEventListener("click", function(){
  addShoppingItems('beverages');
})

documents.getElementById("magazines").addEventListener("click", function(){
  addShoppingItems('magazines')
});

//add click handlers to each shopping list
//documents.getElementById("parent").addEventListener("click", function(){
  //var itemName =



//add event handlers to shopping list
var parent = document.getElementById('parent');
var shopping = document.getElementById('cart');

parent.addEventListener("click", event => {
  if(event.target.className === 'child') {
    addItemToShoppingCart(itemName);
  }})


// Add shopping items to our page
function addShoppingItems(category) {
  // first, clear out all items I am currently showing
  clearShoppingItems();

function addShoppingItems(category) {
  // first, clear out all items I am currently showing
  clearShoppingItems();

  var myItems;
  switch(category) {
    case 'pizza':
      myItems = pizzaItems;
      break;
    case 'magazines':
      myItems = magazineItems;
      break;
    case 'beverages':
      myItems = beverageItems;
      break;
    default:
  }

//populate images

    //add events to category buttons




    // Add click handlers to each shopping item






