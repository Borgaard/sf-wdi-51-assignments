
// store images in array and loop through image arrays and on click on button display images into empty div in HTML
const sushi = ["styles/sushi/sushi1.jpeg", "styles/sushi/sushi2.jpg", "styles/sushi/sushi3.jpg", "styles/sushi/sushi4.jpeg", "styles/sushi/sushi5.jpeg", "styles/sushi/sushi6.jpeg"];
const pasta =  ["styles/pasta/pasta1.jpeg", "styles/pasta/pasta2.jpeg", "styles/pasta/pasta3.jpeg", "styles/pasta/pasta4.jpeg", "styles/pasta/pasta5.jpeg", "styles/pasta/pasta6.jpeg"];
const cake = ["styles/cakes/cake1.jpeg", "styles/cakes/cake2.jpeg", "styles/cakes/cake3.jpeg", "styles/cakes/cake4.jpeg", "styles/cakes/cake5.jpeg", "styles/cakes/cake3.jpeg"];

// give pictures descriptions in alt value
let itemNameSushi = ["sushi1", "sushi2", "sushi3", "sushi4", "sushi5", "sushi6"]
let itemNamePasta = ["pasta1", "pasta2", "pasta3", "pasta4", "pasta5", "pasta6"];
let itemNameCake = ["cake1", "cake2", "cake3", "cake4", "cake5", "cake6"];

// reference empty container in HTML
let image = document.querySelectorAll('img');
let buttons = document.querySelectorAll('button');
let p = document.querySelectorAll('p');

 // take getAttribute with alt value and append to <ul>

const move = function() {
  // and then displays them in the image container
  if (this.getAttribute('id') === "button1") {
    // loops through an array of images in a folder
    for (i = 0; i < image.length; i++) {
      image[i].src = sushi[i];
      image[i].alt = itemNameSushi[i];
    }
  } else if (this.getAttribute('id') === "button2") {
      for (i = 0; i < image.length; i++) {
      image[i].src = pasta[i];
      image[i].alt = itemNamePasta[i];
      }
  } else if (this.getAttribute('id') === "button3") {
      for (i = 0; i < image.length; i++) {
      image[i].src = cake[i];
      image[i].alt = itemNameCake[i];
      }
    }
    document.getElementById("gallery-wrapper").style.display = "flex";
};


// for loop to add addEventListenerto all buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', move);
};

// ============================================================

// hide and show title p, depending on which button is clicked

// use that p to push to local storage and to add it to the shopping cart

// =============================================================


// reference DOM Elements to use further on
// cannot use querySelectorAll here because it returns a static node list that does not support eventlisteners
let imageParent = document.getElementById('gallery-wrapper');
let list = document.querySelectorAll(".list");
let ul = document.querySelector('ul');


//https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
// function that creates a list element
let newLi = (text) => {
  //create new element
  let li = document.createElement('li');
  // give new Element content
  li.innerHTML = text;
  // add the ul to the newly created li
  ul.appendChild(li);

  // on top append the listItem into the list?
  document.getElementsbyClassName('list')[0].append(li);
}


// Event Delegation: add eventlistener to Parent element which makes all its children listen to the event
imageParent.addEventListener("click", function(e) {
    // e.target is the clicked element
   if (e.target && e.target.matches("img")) {
    console.log("image clicked");

    // when image is clicked combine both arrays to display the list on the cart page?
    for (let j = 0; j < sushi.length; j++) {
    var listItemSushi = sushi.concat(itemNameSushi);
    console.log(listItemSushi[6]);
   }

   //store items in local storage
   localStorage.setItem('image', "sushi1");
   newLi(image.value);
   image.value = "";
   newLi.value = "";
   }
});


// NOTES and QUESTIONS
// =======================================================================
// do we put the image description first into the locals storage and then to the list view or vice versa?
// can we hide and let <p> appear on button click? and use that to display in the shopping cart?
// can we use the <alt> tag as text and display that in the shopping cart?

// debugger; to troubleshoot in console.log chrome

// can we get the alt as a text that we can display in the shopping cart?

// function myFunction(imgs) {
//   // Get the expanded image
//   var expandImg = document.getElementById("expandedImg");
//   // Get the image text
//   var imgText = document.getElementById("imgtext");
//   // Use the same src in the expanded image as the image being clicked on from the grid
//   expandImg.src = imgs.src;
//   // Use the value of the alt attribute of the clickable image as text inside the expanded image
//   imgText.innerHTML = imgs.alt;
//   // Show the container element (hidden with CSS)
//   expandImg.parentElement.style.display = "block";
// }


// can I use local storage to display items in shopping list
// On the item page?

// var cartItems = localStorage.getItem('cartItems');

// cartItems.push(newItem);

// localStorage.setItem('cartItems', cartItems);

// Then on the cart page:

// var cartItems = localStorage.getItem('cartItems');

// then display cart items with append to DOM



// when click on button display in cart. created 3 divs and when click on one button, display none for other






