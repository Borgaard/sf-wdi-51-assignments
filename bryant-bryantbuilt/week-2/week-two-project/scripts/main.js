console.log("Main is linked");

// Main Product Section

let productGrid = document.querySelector('.product-grid');

let loadProduct = function(prod) {
  let li = document.createElement('li');
    li.className = "productBox";
    productGrid.appendChild(li);
  let picBox = document.createElement('div');
    picBox.className = "pic-box";
    li.appendChild(picBox);
  let productPic = document.createElement('img');
    productPic.className = "prod-pic";
    productPic.setAttribute('src', prod.imageLink);
    picBox.appendChild(productPic);
  let productDesc = document.createElement('h2');
    productDesc.className = "prod-desc";
    productDesc.innerHTML = prod.name;
    li.appendChild(productDesc);
  let productPrice = document.createElement('h3');
    productPrice.className = "prod-price";
    productPrice.innerHTML = `$${prod.price}`;
    li.appendChild(productPrice);
  let addToCartBtn = document.createElement('button');
    addToCartBtn.className = "add-to-cart";
    addToCartBtn.setAttribute('id',prod.prodId);
    addToCartBtn.innerHTML = "Add To Cart";
    addToCartBtn.addEventListener('click',prod.addToCart);
    li.appendChild(addToCartBtn);
};

let displayProducts = function(prodArray) {
  for (let i = 0; i < prodArray.length; i++) {
    loadProduct(prodArray[i]);
  };
};

let clearProducts = function() {
  while (productGrid.firstChild) {
    productGrid.removeChild(productGrid.firstChild);
  };
};

let displayCandies = function() {
  clearProducts();
  displayProducts(candies);
  };

let displayCereal = function() {
  clearProducts();
  displayProducts(cereals);
  };

let displayJuice = function() {
  clearProducts();
  displayProducts(juices);
  };

let candyCat = document.querySelector('#candy');
  candyCat.addEventListener('click',displayCandies);
let cerealCat = document.querySelector('#cereal');
  cerealCat.addEventListener('click',displayCereal);
let juiceCat = document.querySelector('#juice');
  juiceCat.addEventListener('click',displayJuice);

/* Shopping Cart */

let shoppingCart = document.querySelector('.cart-items');

let inCart = [];

let showInCart = function(prod) {
  let li = document.createElement('li');
    li.className = "li-in-cart";
    shoppingCart.appendChild(li);
  let productDesc = document.createElement('h3');
    productDesc.className = "prod-desc in-cart";
    productDesc.innerHTML = prod.name;
    li.appendChild(productDesc);
  let productPrice = document.createElement('h3');
    productPrice.className = "prod-price in-cart";
    productPrice.innerHTML = `$${prod.price}`;
    li.appendChild(productPrice);
  let removeFromCartBtn = document.createElement('button');
    removeFromCartBtn.className = "remove-from-cart";
    removeFromCartBtn.setAttribute('id',prod.prodId);
    removeFromCartBtn.innerHTML = "Remove Item";
    removeFromCartBtn.addEventListener('click',prod.removeFromCart);
    li.appendChild(removeFromCartBtn);
}

