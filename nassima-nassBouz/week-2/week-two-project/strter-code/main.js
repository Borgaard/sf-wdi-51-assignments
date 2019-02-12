//create two arrays for products and buttons
var cereals = ['cherios', 'crunch' , 'fruit loops','puffs', 'raisin bran','kit-kat','m&ms','skittles','snickers',
                'twix','apple-juice','carrot-juice','grape-juice', 'orance-juice','tomato-juice'];
var botonEvn = [".button1", ".button2", ".button3",".button4",".button5", ".button6",".button7",
                ".button8",".button9",".button10",".button111",".button12",".button13",".button14",".button15"];

var bootton = [];
var itemsInCart = 0;
var listOfProducts = [];

// -------- create event listeners for all the products buttons -------------------
for(let i = 0 ; i < botonEvn.length; i++){
  bootton[i] = document.querySelector(botonEvn[i]);
   let temp = cereals[i];
   bootton[i].addEventListener('click', function(i){
   var t = document.createElement('li');
   var m = document.createTextNode(temp);
   t.appendChild(m);
   document.querySelector('.shoppingCartList').appendChild(t);
   itemsInCart +=1;
   listOfProducts.push(temp) ;
   changeProdQuan ();
});
}

// ---------- this functin returns the total price of the products---------------------
var total = 0;
function calculateTotal(){
  for (let i = 0; i < itemsInCart; i++){
    if (listOfProducts[i] == "cherios"){
      total = total + 2.99;
    } else if (listOfProducts[i] == "crunch"){
      total = total + 1.99;
    }else if (listOfProducts[i] == "fruit loop"){
      total = total + 2.99;
    }else if (listOfProducts[i] == "puffs"){
      total = total + 3.45;
    }else if (listOfProducts[i] == "raisin bran"){
      total = total + 3.25;
    }else if (listOfProducts[i] == "kit-kat"){
      total = total + 2.25;
    }else if (listOfProducts[i] == "m&ms"){
      total = total + 1.99;
    }else if (listOfProducts[i] == "skittles"){
      total = total + 3.25;
    }else if (listOfProducts[i] == "snickers"){
      total = total + 4.25;
    }else if (listOfProducts[i] == "twix"){
      total = total + 3.25;
    }else if (listOfProducts[i] == "apple-juice"){
      total = total + 2.25;
    }else if (listOfProducts[i] == "carrot-juice"){
      total = total + 3.25;
    }else if (listOfProducts[i] == 'grape-juice'){
      total = total + 2.99;
    }else if (listOfProducts[i] == 'orance-juice'){
      total = total + 4.25;
    }else if (listOfProducts[i] == 'tomato-juice'){
      total = total + 3.25;
    }
}
 return total;
}

calculateTotal();

// ------- this function displays the number of productss-------------
function changeProdQuan (){
  var productQuantity = document.querySelector('.product-quantity');
  var price = document.querySelector('.price');
  console.log(productQuantity);
  if (itemsInCart != 0){
    productQuantity.innerHTML = (`${itemsInCart} `);
    price.innerHTML = `${calculateTotal().toFixed(2)}`;
    emptyButton();
  }
}

// ---------- create event listeners to change categories--------
var button22 = document.querySelector('.button22');
button22.addEventListener('click', changeCategory1);
function changeCategory1(){
 document.querySelector('.candies').style.display = "flex";
  document.querySelector('.cereal').style.display = "none";
  document.querySelector('.juice').style.display = "none";
}

var button11 = document.querySelector('.button11');
button11.addEventListener('click', changeCategory2);
function changeCategory2(){
 document.querySelector('.cereal').style.display = "flex";
 document.querySelector('.candies').style.display = "none";
 document.querySelector('.juice').style.display = "none";
}
var button33 = document.querySelector('.button33');
button33.addEventListener('click', changeCategory3);
function changeCategory3(){
 document.querySelector('.juice').style.display = "flex";
 document.querySelector('.candies').style.display = "none";
 document.querySelector('.cereal').style.display = "none";
}

