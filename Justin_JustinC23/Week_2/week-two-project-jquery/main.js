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
    img: 'images/deepdish.jpg',
    name: 'Deep Dish'
  },
  {
    img: 'images/Pepperoni.jpg',
    name: "Pepperoni"
  },
  {
    img: "images/sausagepizza.jpg",
    name: 'Sausage Pizza'
  },

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

  // Add click handlers to our category buttons
document.getElementById("pizza").addEventListener("click", function(){
  addShoppingItems('pizza');
})

document.getElementById("bev").addEventListener("click", function(){
  addShoppingItems('beverages');
})

document.getElementById("mags").addEventListener("click", function(){
  addShoppingItems('magazines')
});

// Add click handlers to each shopping item
// Add click handlers to each shopping item
//$('#items').on('click', '.items', function() {
  //var itemName = $(this).find('p').text();
//  addItemToShoppingCart(itemName);
//});


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


var newList = $('<ul>');
  for(var i = 0; i < myItems.length; i++) {
    var currentItem = myItems[i];

    newList.append(
      `<li class="items">
        <img src="${currentItem.img}">
        <p>${currentItem.name}</p>
      </li>`);
  }

  $('#items').append(newList);
}

// Clear our current shopping-items
function clearShoppingItems() {
  $('#items').empty();
}

// Add item to shopping cart
function addItemToShoppingCart(category) {
  $('#items ul').append(`
    <li>
      ${item}
    </li>
  `);
}
