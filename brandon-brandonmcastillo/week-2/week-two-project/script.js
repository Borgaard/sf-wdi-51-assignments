$( document ).ready(function() {
  // Jquery Code here


let Sushi = [
{
        name: "Vegetable Roll",
        price: 10,
        image: 'images/Drinks/veg.roll'
    },
    {
        name: "Nordic Roll",
        price: 13,
        image: 'images/Drinks/nordicroll'
    },
    {
        name: "Rainbow Roll",
        price: 15,
        image: 'images/Drinks/rainbowroll.jpg'
    },
    {
        name: "Tempura Roll",
        price: 15,
        image: 'images/Drinks/tempuraroll.jpg'
    },
    {
        name: "Unagi Roll",
        price: 12,
        image: 'images/Drinks/unagiroll.jpg'
    },
];

let Nigiri = [{
        name: "Prawns",
        price: 5,
        image: 'images/Nigiri/prawns.jpg'

    },
    {
        name: "Salmon",
        price: 5,
        image: 'images/Nigiri/salmon.jpg'
    },
    {
        name: "Seabass",
        price: 5,
        image: 'images/Nigiri/seabass.jpg'
    },
    {
        name: "Tuna",
        price: 5,
        image: 'images/Nigiri/tuna.jpg'
    },
    {
        name: "Unagi",
        price: 5,
        image: 'images/Nigiri/unagi.jpg'
    },
];

let Drinks = [{
        name: "Coke",
        price: 3,
        image: 'images/Drinks/coke.jpg'
    },
    {
        name: "Diet Coke",
        price: 3,
        image: 'images/Drinks/dietcoke.jpg'
    },
    {
        name: "7UP",
        price: 3,
        image: 'images/Drinks/7up.jpg'
    },
    {
        name: "Kirin Beer",
        price: 5,
        image: 'images/Drinks/kirin.jpg'
    },
    {
        name: "Sapporo Beer",
        price: 5,
        image: 'images/Drinks/sapporo.jpg'
    },
];

 
// Add Events Listener for Button to Add Objects in specific Element which is Product
 var product = document.getElementsByClassName("product");
function menuPop() {
    document.getElementById('sushimenu').addEventListener("click", function(name, price, image) {
        for (i = 0; i < Sushi.length; i++) {
            product[i].innerHTML = `<p id="items1">${Sushi[i].name} ${Sushi[i].price} ${Sushi[i].image}</p>`

        }

    });



    document.getElementById('nigirimenu').addEventListener("click", function(name, price, image) {
        for (i = 0; i < Nigiri.length; i++) {
            product[i].innerHTML = `<p id="items2">${Nigiri[i].name} ${Nigiri[i].price} ${Nigiri[i].image}</p>`
        }

    });





    document.getElementById('drinksmenu').addEventListener("click", function(name, price, image) {
        for (i = 0; i < Drinks.length; i++) {
            product[i].innerHTML = `<p id="items3">${Drinks[i].name} ${Drinks[i].price} ${Drinks[i].image}</p>`
        }

    });
};
//Initialize Menu 
menuPop();
// ___________________________________________________________________________
// 


$('#items1').on('click', function(){
            var li = document.createElement('li');
            $(this).appendTo(`jdjdksfjk`);                
            })


// 	document.getElementByTagName('items').append(newList);
// }



});



