console.log("The Script is working!!");


/* Event listeners */
var cerealButton = document.querySelector('.Cereal');
var juiceButton = document.querySelector('.juices');
var candyButton = document.querySelector('.candy');


// add event listeners to each of the category buttons
cerealButton.addEventListener('click', addShoopingItemsCereal);
juiceButton.addEventListener('click', addShoopingItemsJuice);
candyButton.addEventListener('click', addShoopingItemsCandy);

var cerealItems = [
  {
    img: './images/cereal/cheerios.jpg',
    name: 'Cheerios'
  },
  {
    img: './images/cereal/crunch.jpg',
    name: 'Crunch'
  },
  {
    img: './images/cereal/fruit-loops.jpg',
    name: 'Fruit Loops'
  },
  {
    img: './images/cereal/puffs.jpg',
    name: 'Puffs'
  },
  {
    img: './images/cereal/raisin-bran.jpg',
    name: 'Raisin Bran'
  }
];

/* Juice items */
var juiceItems = [
  {
    img: './images/juice/apple-juice.jpg',
    name: 'Apple Juice'
  },
  {
    img: './images/juice/carrot-juice.jpg',
    name: 'Carrot Juice'
  },
  {
    img: './images/juice/grape-juice.jpeg',
    name: 'Grape Juice'
  },
  {
    img: './images/juice/Orange-juice.jpg',
    name: 'Orange Juice'
  },
  {
    img: './images/juice/tomato-juice.jpg',
    name: 'Tomato Juice'
  }
];

/* Candy items */
var candyItems = [
  {
    img: './images/candy/kit-kat.jpg',
    name: 'Kit Kat'
  },
  {
    img: './images/candy/m&ms.jpg',
    name: 'M&M\'s'
  },
  {
    img: './images/candy/skittles.jpg',
    name: 'Skittles'
  },
  {
    img: './images/candy/snickers.jpg',
    name: 'Snickers'
  },
  {
    img: './images/candy/twix.jpg',
    name: 'Twix'
  }
];
/* Clears the user shopping cart */
function clearShoppingItems () {
   document.querySelector(".shopping-items").innerHTML = "";
}
// function for adding cereal items to the page

function addShoopingItemsCereal () {
  clearShoppingItems();

  var userItems = cerealItems;

for (var i = 0; i < userItems.length; i++) {
  var currentItem = userItems[i];


 var listHolder = document.createElement('li');
 var img = document.createElement('img');
 var para = document.createElement('p');
 var text = document.createTextNode(currentItem.name);
 var shoppingClass = listHolder.setAttribute('class', 'item');
 img.src = currentItem.img;
 para.appendChild(text);
 listHolder.appendChild(img);
 listHolder.appendChild(para);

var divContainer = document.querySelector('.shopping-items');

divContainer.appendChild(listHolder); }

}

function addShoopingItemsJuice () {
  clearShoppingItems();

  var userItems = juiceItems;


for (var i = 0; i < userItems.length; i++) {
  var currentItem = userItems[i];


 var listHolder = document.createElement('li');
 var img = document.createElement('img');
 var para = document.createElement('p');
 var text = document.createTextNode(currentItem.name);
 var shoppingClass = listHolder.setAttribute('class', 'item');
 img.src = currentItem.img;
 para.appendChild(text);
 listHolder.appendChild(img);
 listHolder.appendChild(para);

var divContainer = document.querySelector('.shopping-items');

divContainer.appendChild(listHolder); }

}

 function addShoopingItemsCandy () {
  clearShoppingItems() ;

  var userItems = candyItems;


for (var i = 0; i < userItems.length; i++) {
  var currentItem = userItems[i];


 var listHolder = document.createElement('li');
 var img = document.createElement('img');
 var para = document.createElement('p');
 var text = document.createTextNode(currentItem.name);
 var shoppingClass = listHolder.setAttribute('class', 'item');
 img.src = currentItem.img;
 para.appendChild(text);
 listHolder.appendChild(img);
 listHolder.appendChild(para);

var divContainer = document.querySelector('.shopping-items');

divContainer.appendChild(listHolder); }

}







  // add items from the categories section to user shopping cart
  var shoppingList = document.querySelector('.shopping-item');
  var divContainer = document.querySelector('.shopping-items');

  // when user clicks on img or p elements, adds the item to the shopping cart
  divContainer.addEventListener('click', function(e){

    if (e.target.matches('.item')) {
      debugger;
      var itemChosen = e.target.textContent;
      var newItem  = document.createElement('li');
      var text = document.createTextNode(itemChosen);
      var shoppingClass = newItem.setAttribute('class', 'cart-item');
      newItem.appendChild(text);
      shoppingList.appendChild(newItem);

    }

  })
  var clickedImage = document.querySelectorAll('img');







































// var button = document.querySelector('.reset2');

// button.addEventListener('click', showImage)

// // function showImage () {
// // var img = document.createElement('img');
// // var content = document.createElement('P');
// // img.src = images[0].src;
// // var t =document.createTextNode = images[0].title;
// // content.appendChild(t);
// // document.querySelector('.image1-grid').appendChild(img,content);
// //  }

//  var images = [

//  { src: 'images/earth.jpg',
//   title: "this is an image of goku"
// },
//  {
//   src: 'images/goku_head.jpg',
//   title: "this is the second image of goku"
//  },

// {
//   src: 'images/earth.jpg',
//   title: "this is the third image of goku"
//  },

// {
//   src: 'images/earth.jpg',
//   title: "this is the fourth image of goku"
//  },


//  ]
//  function showImage () {
// for (var i = 0; i < images.length; i++) {
// // document.querySelector('.image1-grid').innerHTML = " ";
// var img = document.createElement('img');
// img.src = images[i].src;
// document.querySelector('.image2-grid').appendChild(img);
// };
// }

