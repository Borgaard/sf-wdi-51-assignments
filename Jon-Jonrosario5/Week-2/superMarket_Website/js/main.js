// Drop Down Section

// Add a function that replaces the 5 below

function showDropDown() {
  document.getElementById("cereal").classList.toggle("show");
}

function showDropDown1() {
  document.getElementById("candy").classList.toggle("show");
}

function showDropDown3() {
  document.getElementById("beverage").classList.toggle("show");
}

function showMenu() {
  document.getElementById("snack").classList.toggle("show");
}

function showCheckout(){
  document.getElementById("checkOutItems").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementById("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Adding to Checkout Button

let addButton = document.getElementById('add_buttons');



