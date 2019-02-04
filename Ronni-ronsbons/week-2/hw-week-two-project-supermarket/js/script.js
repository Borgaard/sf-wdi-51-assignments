// Setting variables for each category's list item
let produceButton = document.querySelector('.produce');
let pastaButton = document.querySelector('.pasta');
let snacksButton = document.querySelector('.snacks');

// Set event listener for clicking a category name
produceButton.addEventListener('click', showProduce);
pastaButton.addEventListener('click', showPasta);
snacksButton.addEventListener('click', showSnacks);


// Variables and functions to make sections visible
let produceProducts = document.querySelector('.produceProducts');
let pastaProducts = document.querySelector('.pastaProducts');
let snacksProducts = document.querySelector('.snacksProducts');

// [] TODO: How do I turn these functions into one by using a parameter?  I tried to put in a parameter, but it didn't work.
function showProduce() {
  produceProducts.style.display = 'flex';
  pastaProducts.style.display = 'none';
  snacksProducts.style.display = 'none';
};

function showPasta() {
  produceProducts.style.display = 'none';
  pastaProducts.style.display = 'flex';
  snacksProducts.style.display = 'none';
};

function showSnacks() {
  produceProducts.style.display = 'none';
  pastaProducts.style.display = 'none';
  snacksProducts.style.display = 'flex';
};


// [] TODO: HOW TO MAKE ALL OF THESE INTO ONE FUNCTION???!!!
/*
let produce = ['avocado', 'banana', 'cucumber', 'blackgrape', 'tomato'];

for (var i = 0; i < produce.length; i++) {
  let produce[i] = document.querySelector('.produce[i]');
  produce[i].addEventListener('click', addItem);
  function addItem() {
    let addedItems = document.querySelector('.addedItems');
    let newItem = document.createElement('li');
    newItem.innerHTML = document.querySelector('.produce[i] > p').textContent;
    addedItems.appendChild(newItem);
  };
};
*/


// Adding produce items to shopping cart
let avocado = document.querySelector('.avocado');
avocado.addEventListener('click', addAvocado);
function addAvocado() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.avocado > p').textContent;
  addedItems.appendChild(newItem);
};

let banana = document.querySelector('.banana');
banana.addEventListener('click', addBanana);
function addBanana() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.banana > p').textContent;
  addedItems.appendChild(newItem);
};

let cucumber = document.querySelector('.cucumber');
cucumber.addEventListener('click', addCucumber);
function addCucumber() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.cucumber > p').textContent;
  addedItems.appendChild(newItem);
};

let blackgrape = document.querySelector('.blackgrape');
blackgrape.addEventListener('click', addBlackGrape);
function addBlackGrape() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.blackgrape > p').textContent;
  addedItems.appendChild(newItem);
};

let tomato = document.querySelector('.tomato');
tomato.addEventListener('click', addTomato);
function addTomato() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.tomato > p').textContent;
  addedItems.appendChild(newItem);
};


// Add pasta to shopping cart
let linguine = document.querySelector('.linguine');
linguine.addEventListener('click', addLinguine);
function addLinguine() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.linguine > p').textContent;
  addedItems.appendChild(newItem);
};

let macaroni = document.querySelector('.macaroni');
macaroni.addEventListener('click', addMacaroni);
function addMacaroni() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.macaroni > p').textContent;
  addedItems.appendChild(newItem);
};

let penne = document.querySelector('.penne');
penne.addEventListener('click', addPenne);
function addPenne() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.penne > p').textContent;
  addedItems.appendChild(newItem);
};

let rigatoni = document.querySelector('.rigatoni');
rigatoni.addEventListener('click', addRigatoni);
function addRigatoni() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.rigatoni > p').textContent;
  addedItems.appendChild(newItem);
};

let spaghetti = document.querySelector('.spaghetti');
spaghetti.addEventListener('click', addSpaghetti);
function addSpaghetti() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.spaghetti > p').textContent;
  addedItems.appendChild(newItem);
};


// Add snacks to shopping cart
let chex = document.querySelector('.chex');
chex.addEventListener('click', addChex);
function addChex() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.chex > p').textContent;
  addedItems.appendChild(newItem);
};

let cheetos = document.querySelector('.cheetos');
cheetos.addEventListener('click', addCheetos);
function addCheetos() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.cheetos > p').textContent;
  addedItems.appendChild(newItem);
};

let popcorn = document.querySelector('.popcorn');
popcorn.addEventListener('click', addPopcorn);
function addPopcorn() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.popcorn > p').textContent;
  addedItems.appendChild(newItem);
};

let ruffles = document.querySelector('.ruffles');
ruffles.addEventListener('click', addRuffles);
function addRuffles() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.ruffles > p').textContent;
  addedItems.appendChild(newItem);
};

let vegChips = document.querySelector('.vegChips');
vegChips.addEventListener('click', addVegChips);
function addVegChips() {
  let addedItems = document.querySelector('.addedItems');
  let newItem = document.createElement('li');
  newItem.innerHTML = document.querySelector('.vegChips > p').textContent;
  addedItems.appendChild(newItem);
};
