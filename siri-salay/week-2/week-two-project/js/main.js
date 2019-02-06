
$(document).ready(function() {
    console.log("Everything is ready, let's dooooooooooo");

$("#delete").on("click", function(){

$('#itemList li:last-child').remove();
});

$("#empty").on("click", function(){
$('#itemList').empty();

});

  });

/* if user clicks on plush toys
    make the images appear in the display

    make the object have 2 keys. the image id and the description you want
    to display on the shopping car */

//make a constructor!

class essential {
  constructor(description, price) {
    this.description = description;
    this.price = price;
  }
}

  let plush1 = new essential("Teddy Bear with Plaid Bowtie", 28);



  // var plush1 = {description: "Teddy Bear with Plaid Bowtie", price: 28}
  var plush2 = {description: "Owl Plush Toy", price: 29}
  var plush3 = {description: "Melt-Resistant Snowman", price: 25}
  var plush4 = {description: "Teddy Bear with Book", price: 18}
  var plush5 = {description: "Beige Monkey Plush Toy", price: 24}
  var plush6 = {description: "Easter Bunny Plush Toy", price: 22}

  var onesie1 = {description: "Fox Onesie", price: 22}
  var onesie2 = {description: "Shark Onesie", price: 18}
  var onesie3 = {description: "Elephant Onesie", price: 18}
  var onesie4 = {description: "Panda Onesie", price: 18}
  var onesie5 = {description: "Rainbow Unicorn Onesie", price: 18}
  var onesie6 = {description: "Kangaroo Onesie", price: 18}

  var pillow1 = {description: "Reversible Golden Retriever Pillow", price: 22}
  var pillow2 = {description: "Reversible Bulldog Pillow", price: 22}
  var pillow3 = {description: "Reversible Grey Cat Pillow", price: 22}
  var pillow4 = {description: "Unicorn Sequin Pillow", price: 22}
  var pillow5 = {description: "Black Cat Sequin Pillow", price: 22}
  var pillow6 = {description: "Baby Red Dragon Sequin Pillow", price: 22}

  var plushies = [plush1, plush2, plush3, plush4, plush5, plush6]
  var onesies = [onesie1, onesie2, onesie3, onesie4, onesie5, onesie6]
  var pillows = [pillow1, pillow2, pillow3, pillow4, pillow5, pillow6]

/// *****YOU ACTUALLY DONT NEED THESE 3 FUNCTIONS*****
  for(i=0; i<plushies.length; i++){
   plushies[i].imageId = "plush" + (i+1);
  }

   for(i=0; i<onesies.length; i++){
   onesies[i].imageId = "onesie" + (i+1);
  }

   for(i=0; i<pillows.length; i++){
   pillows[i].imageId = "pillow" + (i+1);
  }


  console.log(plushies);

  /* could potentially have done it this way? :
  for(i=0; i<pillows.length; i++){
  pillows[i].imageId = "pillow" + i;
  }


for (var i=0; i<plushies.length; i++)
{
  //for i=0, then loadingImage = document.querySelectorAll("#display img")[0]
  var loadingImage = document.querySelectorAll("#display img")[i];
  //creating a newImg
  var newImg = new Image;
   newImg.onload = function() {
    loadingImage.src=this.src;
    }
  //setting image source to the next one;
    newImg.src = "./images/plush" + i + ".png";
}
*/

var plushButton = document.getElementById("plushies");
var onesieButton = document.getElementById("onesies");
var pillowButton = document.getElementById("pillows");


//IMPORTANT
//adds the images to the div when button is clicked
var addPlushImages = function(){
  //loops through the array
  for (var i=0; i<plushies.length; i++) {
    //this gets the img tag in the html - this is where we want to display the
    //selected image at index i in the array.

    //this code below is to get that img tag
  var loadingImage = document.querySelectorAll("#display img")[i];
  //ignore this for now
  var imageDescription = document.querySelectorAll("#display h3")[i];
  imageDescription.innerHTML = plushies[i].description;
  var a = i+1;

  //this sets the attribute src in the image tag
  loadingImage.src= "./images/plush" + a + ".png";
  loadingImage.alt= plushies[i].description;
  //loadingImage.setAttribute("onclick", "putInCart()");
  loadingImage.addEventListener("click", putInCart);
    }
}


var addOnesieImages = function(){
  for (var i=0; i<onesies.length; i++) {
  var loadingImage = document.querySelectorAll("#display img")[i];
  var imageDescription = document.querySelectorAll("#display h3")[i];
  imageDescription.innerHTML = onesies[i].description;
  var a = i+1;
  loadingImage.src="./images/onesie" + a + ".png";
  loadingImage.alt= onesies[i].description;
  //loadingImage.setAttribute("onclick", "putInCart()");
  loadingImage.addEventListener("click", putInCart);

/*


  //create an h2 element
  var newPriceItem = document.createElement('h3');
  //create price variable as an int
  var price = onesies[i].price;
  newPriceItem.innerHTML = "$" + price;
  document.querySelectorAll('.price')[i].appendChild(newPriceItem);
  //set the price
  //when clicked put in cart and get total.

*/
    }
}

var addPillowImages = function(){
  for (var i=0; i<pillows.length; i++) {
  var loadingImage = document.querySelectorAll("#display img")[i];
  var imageDescription = document.querySelectorAll("#display h3")[i];
  imageDescription.innerHTML = pillows[i].description;
  var a = i+1;
  loadingImage.src="./images/pillow" + a + ".png";
  loadingImage.alt= pillows[i].description;
  //loadingImage.setAttribute("onclick", "putInCart()");
  loadingImage.addEventListener("click", putInCart);
    }
}

var putInCart = function(){

      // Create list item and store it in a variable.
      var newListItem = document.createElement('li');

      // Update the text content of that list item.
      // HOW TO GET SPECIFIC IMAGE DESCRIPTION - it's also the alt text

      newListItem.innerHTML = this.alt;
      //returns undefined
      //document.getElementById("").alt;
      //this.querySelector("img").src;
      newListItem.style.margin = "1em 1em 0 0 ";

      // Append list item as a child of the ul with class itemList.
      document.getElementById('itemList').appendChild(newListItem);
    }

/*
<script type="text/javascript">
function image(img) {
    var src = img.src;
    window.open(src);
}
</script>
<img src="pond1.jpg" height="150" size="150" alt="Johnson Pond" onclick="image(this)">
shareedit
*/

plushButton.addEventListener("click", addPlushImages);
onesieButton.addEventListener("click", addOnesieImages);
pillowButton.addEventListener("click", addPillowImages);

/*

maybe in the display image function, use a for loop to
add an event listener to each object that when you
click on it, it calls the function that
creates a list item in the fucking shopping cart,
//WHERE DO YOU GET THIS
sets the inner html of the list item to the description attached to the image.

innerHTML = pillows[i].description






var imageArray = document.querySelectorAll('.display img');

for (let i =0; i<imageArray.length; i++) {
  var loadingImage = imageArray[i];
  alttext =
}


var buttons = document.querySelectorAll('li');


for (let i = 0; i< buttons.length; i++) {
   buttons[i].addEventListener('click', switchTheme);
}

function switchTheme(){
  var clickedButton = this.className;
  var body = document.getElementsByTagName('body')[0];
  body.className = clickedButton;
}

/*
  you want the shopping cart to fill with the things when you click on each image

  button = getElementByTagName("BUTTON");
  So button.onclick = function() {


if clicked
 (image)


    image.onclick = function(){
      create a new 'li' element in the cart that
       has the inner HTML set to the description (the alt) of the image



    }


THIS IS VALID
  element.addEventListener('nameOfEvent', function => (arguments) {
    do something; }
  )



  }


*/

/*
let addNewItem = (htmlInside, tagName) => {
  let newListItem = document.createElement(`${tagName}`);
  newListItem.innerHTML = `${htmlInside}`;
  document.querySelector('ul').appendChild(newListItem);
};

why not
let addNewItem = (html, tagName) => {
  let newListItem = document.createElement(tagName);
  newListItem.innerHTML = html;
  document.querySelector('ul').appendChild(newListItem);
};

WHY IS IT IN JQUERY?
*/




/*

thisImage.innerHTML = 'src = "./images/plush2.png"';
document.getElementById("imageid").src="../template/save.png";

 THIS HELPED SO MUCH!
var _img = document.getElementById('id1');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = 'http://whatever';

https://stackoverflow.com/questions/19396390/load-image-from-javascript


*/



// for (var i = 0; i < plushies.length; i++) {
//   plushies[i].appear = function(){
//     document.querySelectorAll('.display img')[i].setAttribute('src', 'images/' + this.name + '.jpg');
//   };
// }
