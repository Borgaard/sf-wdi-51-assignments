//[] click function to show list.
//[] possible function to remove the list.
//[] click function adds item shopping's unordered list
//[]create array of 3 objects.


//Variables for each grocery item

var beans = "./images/canned/beans.png"
var collardgreens = "./images/canned/collardgreens.png"
var jalapenos = "./images/canned/jalapenos.png"
var mixedveggies = "./images/canned/mixedveggies.png"
var soup = "./images/canned/soup.png"
var tuna = "./images/canned/tuna.png"

var bread = "./images/drygoods/bread.png"
var crutones = "./images/drygoods/crutones.png"
var flour = "./images/drygoods/flour.png"
var lentiles = "./images/drygoods/lentiles.png"
var rice = "./images/drygoods/rice.png"
var tortillas = "./images/drygoods/tortillas.png"

var bananas = "./images/produce/bananas.png"
var carambolas = "./images/produce/carambolas.png"
var grapes = "./images/produce/grapes.png"
var mangoes = "./images/produce/mangoes.png"
var onions = "./images/produce/onions.png"
var potatoes = "./images/produce/potatoes.png"

// OOP constructor function for grocery display
var Categories = function () {
  img1:
  img2:
  img3:
  img4:
  img5:
  img6:
}

// establishing idividual functions

var canned = new Categories (beans, collardgreens, jalapenos, mixedveggies,
                              soup, tuna){};
var dry = new Categories(bread, crutones, flour, lentiles,
                         rice, tortillas)

var produce = new Categories (bananas, carambolas, grapes, mangoes,
                          onions, potatoes){};

//Can I pass an entire folder in as an argument for an new object?

var  categories = [ produce, drygoods, canned]






var pro = document.querySelector(".pro");
var dry = document.querySelector(".gro");
var can = document.querySelector(".can");

pro.addEventListener("click", appearFunct);
dry.addEventListener("click", appearFunct);
can.addEventListener("click", appearFunct);

function appearFunct (event){

  clearGroceryItems();



  if (pro.type === "click") {

    categories[0] // go through Produce and get each key
    iterate through object
    grab key
    append key
    produceAppear.appendChild(`<li>  </li>`)
    document.querySelector("#groceryItems").appendChild(produce)//I wnat to appendChild the array
  }
  else if (dry.type === "click"){
    document.querySelector("#groceryItems").appendChild(drygoods)
  }
  else (can.type === "click")
    document.querySelector("#groceryItems").appendChild(canned)
}



// clear the appearing list of items

function clearGroceryItems () {
  document.querySelector("#groceryItems ul").empty();
}



