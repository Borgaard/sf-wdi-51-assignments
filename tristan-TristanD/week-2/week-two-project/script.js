//WHen you click a button
// push images into a page


// homee.addEventListener('click', trans);
// clothess.addEventListener('click', trans);
// pantss.addEventListener('click', trans);


  AOS.init();

var clothes = [
    { name:  'Givenchy Sweater',
         image:'hello'

    },
     { name:  'Heron Mockneck',
        image:'hello'

    },
     { name:  'Saintwoods Hoodie',
         image: 'hello'

    }
]

var pants = [
 {       name:'dior',
         image:'hellooo'

    },
     {  name:'Stone Island',
         image:'hello'

    },
     {  name: 'ACNE',
         image:'wsup'

    }


]

var footwear = [
     { name:  'Suicoke Palm Angels'
        // image:

    },
     { name:  'Gucci Ace Flame'
        // image:

    },
     { name:  'Suicoke Moto Cab'
        // image:

    }
]


var foot = document.getElementById('footwear');
var topss = document.getElementById('tops');
var pantss = document.getElementById('pants');
var cart = document.getElementById('inside');
var items = document.getElementById('menu');
var merch =document.getElementById('in-menu');


// for(var i = 0; i < footwear.length; i++) {
//     footwear[i] = function(otherAnimal) {
//         this.friend = otherAnimal;
//     };
// }


// topss.onclick = function(name){
//   for(var i = 0; i <footwear.length; i++) {
//       cart.innerHTML = footwear[i].name;
//  }



//  function trans(){

let menuPop = function(){
var menuplace = document.getElementById('menu');


topss.addEventListener("click", function(name,price,image) {
   for (i = 0; i < clothes.length; i++) {
       merch.innerHTML = `${clothes[i].name} ${clothes[i].price} ${clothes[i].image}`

   }

});




foot.addEventListener("click", function(name,price,image) {
   for (i = 0; i < footwear.length; i++) {
       merch.innerHTML = `${footwear[i].name} ${footwear[i].price} ${footwear[i].image}`
   }

});





pantss.addEventListener("click", function(name,price,image) {
   for (i = 0; i < pants.length; i++) {
       merch.innerHTML = `${pants[i].name} ${pants[i].price} ${pants[i].image}`
   }

});

}

menuPop();






