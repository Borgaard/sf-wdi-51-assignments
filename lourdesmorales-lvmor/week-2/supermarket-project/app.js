// var getAllItems = document.getElementsByClassName("add-to-cart");

// function addItemToCart(event) {
//   // event.preventDefault();
//   var name = this.getAttribute("data-name");
//   var price = this.getAttribute("data-price");
//   // getAllItems.addEventListener("click", addItemToCart);

//   addItemToCart(name, price, 1);
// }


// function displayCart () {
//   var cartArray = listCart();
//   var output = "";
//   for (var i in cartArray) {
//     output += `<li> ${cartArray[i].name} ${cartArray[i].count} </li>`
//   }
//   document.getElementById("show-cart").innerHTML;
//  output = document.getElementById("show-cart").innerHTML;
// }


//Shopping cart functions
let cart = [];
var Item = function (name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
};

function addItemToCart(name, price, count) {
  var item = new Item(name, price, count);
  cart.push(item);
}


//Sidebar
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("style");
}





