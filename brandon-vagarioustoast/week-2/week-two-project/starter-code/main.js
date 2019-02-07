// Grocery Objects
const vegetables = {
  carrot: {
    name: 'Carrots',
    img: './img/vegetables/carrots.jpeg',
    price: 2,
  },
  beet: {
    name: 'Beet',
    img: './img/vegetables/beet.jpeg',
    price: 2,
  },
  vegetableTray: {
    name: 'Vegetable Tray',
    img: './img/vegetables/vegetabletray.jpeg',
    price: 5,
  },
  mixedVegetables: {
    name: 'Mixed Vegetables',
    img: './img/vegetables/mixedvegetables.jpeg',
    price: 3,
  },
  broccoli: {
    name: 'Broccoli',
    img: './img/vegetables/broccoli.jpeg',
    price: 2,
  }
}

const dairy = {
  milk: {
    name: 'Milk',
    img: './img/dairy/milk.jpeg',
    price: 5,
  },
  goatCheese: {
    name: 'Goat Cheese',
    img: './img/dairy/goatcheese.jpeg',
    price: 4,
  },
  sourCream: {
    name: 'Sour Cream',
    img: './img/dairy/sourcream.jpeg',
    price: 2,
  },
  chocolateMilk: {
    name: 'Chocolate Milk',
    img: './img/dairy/chocolatemilk.jpeg',
    price: 6,
  },
  butter: {
    name: 'Butter',
    img: './img/dairy/butter.jpeg',
    price: 3,
  }
}

const beverages = {
  frappuccino: {
    name: 'Frappuccino',
    img: './img/beverages/frappuccino.jpeg',
    price: 3,
  },
  lemonade: {
    name: 'Half & Half Lemonade',
    img: './img/beverages/lemonade.jpeg',
    price: 6,
  },
  powerade: {
    name: 'Powerade',
    img: './img/beverages/powerade.jpeg',
    price: 2,
  },
  clubSoda: {
    name: 'Club Soda',
    img: './img/beverages/clubsoda.jpeg',
    price: 3,
  },
  beer: {
    name: 'Beer',
    img: './img/beverages/beer.jpeg',
    price: 6,
  }
}


// Loads Initial Selection
loadGroceries(dairy);

// Filter Selections
document.querySelector('#veggies').addEventListener('click', e =>{
  e.preventDefault();
  loadGroceries(vegetables);
});

document.querySelector('#dairy').addEventListener('click', e =>{
  e.preventDefault();
  loadGroceries(dairy);
});

document.querySelector('#beverages').addEventListener('click', e =>{
  e.preventDefault();
  loadGroceries(beverages);
});


//  Add Cart Items
let groceryList = document.querySelector('.grocery-holder');


groceryList.addEventListener('click', function (e){
  e.preventDefault();
  addCartItem(e.target);
  console.log(e.target);
});

function addCartItem (){
  let newCartItem = document.createElement('li');
  let itemName = document.querySelector('h5').textContent;
  newCartItem.innerHTML = itemName;
  document.querySelector(".cart-list").appendChild(newCartItem);
};

// Load Groceries Function


function loadGroceries(groceryObj){
  let newGroceryItem = ``;

  for (groceryItem in groceryObj){
    newGroceryItem += `
    <div class="row">
         <div class="col s8 m4">
            <div class="card">
              <div class="card-image">
                <img src="${groceryObj[groceryItem].img}">
              </div>
              <div class="card-content">
                <h5 class="item-name">${groceryObj[groceryItem].name}</h5>
                <p class="item-price green-text">$${groceryObj[groceryItem].price}</p>
                <a class="waves-effect waves-light btn-small">Add</a>
              </div>
            </div>
          </div>
        </div>
    `
    document.querySelector('.grocery-holder').innerHTML = newGroceryItem;
  }
}
