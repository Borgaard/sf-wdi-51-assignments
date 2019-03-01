// ** When a category is clicked, your page should populate with images
// [ ] add event handlers to buttons to populate images
// ** When I click on a specific shopping item, the item should be added to my shopping cart.
// [ ] Add event handlers to shopping list items that adds to cart /see event delegation
// ** The shopping list will show all of the items that the user has currently selected.
// [ ] add

var shoppingCart = [];

// shopping cart items

var pizzaItems = [
  {
    img: "images/deepdish.jpg",
    name: "Deep Dish"
  },
  {
    img: "images/Pepperoni",
    name: "Pepperoni"
  },
  {
    img: "images/sausagepizza",
    name: "Sausage Pizza"
  },
  {
    img: "images/juice/Orange-juice.jpg",
    name: "Orange Juice"
  },
  {
    img: "images/juice/tomato-juice.jpg",
    name: "Tomato Juice"
  }
];

var beverageItems = [
  {
    img: 'images/coke.jpg',
    name: 'Coke'
  },
  {
    img: 'images/drpepper',
    name: 'Dr Pepper'
  },
  {
    img: 'images/sprite.jpg',
    name: 'Sprite'
  },
  {
    img: 'images/pepsi.jpg',
    name: '7 Up'
  },
  {
    img: 'images/dietcoke.jpg',
    name: 'Diet Coke'
  }
];

    let magazineItems = [
  {
    img: 'images/rollingstone.jpg',
    name: 'Rolling Stone'
  },
  {
    img: 'images/time.jpg',
    name: 'Time'
  },
  {
    img: 'images/popsci.jpg',
    name: 'Popular Science'
  },
  {
    img: 'images/espn.jpg',
    name: 'ESPN'
  },
  {
    img: 'images/dietcoke.png',
    name: 'Diet Coke'
  }
];

  // Add click handlers to buttons
document.getElementById("pizza").addEventListener("click", function(){
  addShoppingItems('pizzaItems');
})

document.getElementById("beverages").addEventListener("click", function(){
  addShoppingItems('beverages');
})

document.getElementById("magazines").addEventListener("click", function(){
  addShoppingItems('magazines')
});


// Add shopping items to our page
function addShoppingItems(category) {
  // first, clear out all items I am currently showing
  clearShoppingItems();

  var myItems;
  switch(category) {
    case 'beverages':
      myItems = beverageItems;
      break;
    case 'pizza':
      myItems = pizzaItems;
      break;
    case 'magazines':
      myItems = magazineItems;
      break;
    default:
  }

  var newList = document.getElementById('items').getElementsByTagName('ul');
  for(var i = 0; i < myItems.length; i++) {
    var currentItem = myItems[i];


  //var listItem = document.getElementById("items")
  //listItem.textContent = myItems;
  // newList.appendChild(listItem);

   var listItem = document.createElement("li");
   listItem.textContent = myItems;

  items.appendChild(listItem);

}


//populate images

    //add events to category buttons




    // Add click handlers to each shopping item



