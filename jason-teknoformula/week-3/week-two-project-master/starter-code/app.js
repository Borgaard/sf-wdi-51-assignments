console.log("connected");

//declaring variables
const navbar = document.querySelectorAll("li > a");
const makeovers = document.querySelector('#nav-makeovers');
const consultations = document.querySelector('#nav-consultations');
const workshops = document.querySelector('#nav-workshops');
const shoppingCart = document.querySelector('#shopping-list');

let firstItem = document.getElementById('first-item');
let secondItem = document.getElementById('second-item');
let thirdItem = document.getElementById('third-item');

let selling = document.querySelectorAll('.grid-item');
let storeGrid = document.querySelector('.grid');

function makeoverGrid(){
  document.querySelector("#market > h2").innerHTML = "<h2>Makeovers</h2";
  firstItem.innerHTML = "<h3>Rejuvenation</h3>";
  secondItem.innerHTML = "<h3>Revival</h3>";
  thirdItem.innerHTML = "<h3>Reinvention</h3>";
}

function consultationsGrid(){
  document.querySelector("#market > h2").innerHTML = "<h2>Book Now!</h2";
  firstItem.firstChild.innerHTML = "<h3>15 min. Call</h3>";
  secondItem.firstChild.innerHTML = "<h3>30 min. Call</h3>";
  thirdItem.firstChild.innerHTML = "<h3>1 Hr Call</h3>";
}

function workshopsGrid(){
  document.querySelector("#market > h2").innerHTML = "<h2>Workshops</h2";
  firstItem.innerHTML = "<h3>Half Day Workshop</h3>";
  secondItem.innerHTML = "<h3>All Day Workshop</h3>";
  thirdItem.innerHTML = "<h3>Intensive Seminars</h3>";
}

//add items to shopping cart
let gridChildren = document.getElementsByClassName("grid")[0].childNodes;

for (let i=0; i < gridChildren.length ;i++) {
  gridChildren[i].addEventListener('click', function(e) {
    let listItem = document.createElement('li');
    listItem.innerHTML = gridChildren[i].textContent;
    shoppingCart.appendChild(listItem);
  })
}

//change navbar
for (let j=0; j<navbar.length; j++) {
  let navId = navbar[j].id;
  navbar[j].addEventListener('click', function(e){
    switch(navId) {
      case "nav-makeovers":
        navbar[j].classList.add('nav-active');
        consultations.classList.remove('nav-active');
        workshops.classList.remove('nav-active');
        makeoverGrid();
        break;
      case "nav-consultations":
        navbar[j].classList.toggle('nav-active');
        makeovers.classList.remove('nav-active');
        workshops.classList.remove('nav-active');
        consultationsGrid();
        break;
      case "nav-workshops":
        navbar[j].classList.toggle('nav-active');
        consultations.classList.remove('nav-active');
        makeovers.classList.remove('nav-active');
        workshopsGrid();
        break;
    }
    e.preventDefault();
  })
}



