// show cart, IIFE (Immediately Invoked Function Expression) so the global variable doesn't exist

(function(){
  // target the cart-info the cart 
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  // cartInfo = document.getElementById('cart-info') is an obj, therefore
  //  we can addEventListener
  cartInfo.addEventListener('click', function(){
    // js will do the opposite of current state of cart if show-cart is not 
    //  present it will add vs.
    cart.classList.toggle('show-cart');
  });
})();

// add items to the cart by targeting span fontAwesome shopping cart add
//  eventlistener!
(function() {
  // since more than 1 cart we will do querySelectorAll
  const cartBtn = document.querySelectorAll('.store-item-icon');

  // loop thru list of .store-item-icon button, passing button 
  cartBtn.forEach(function(btn){
    // let's investigate what we are clicking on; target exact button each and everytime as
    //  I am looping thru the array.  as click anyone of cart icons > event will fire
    btn.addEventListener('click', function (event) {
      // event.target will let us know what element we are clicking on
      // notice this will also give me the span element along the cart icon
      //  we only want click eventlistener to target cart icon!
      // console.log(event.target);
    // event will fire only when clicking on the icon
      if(event.target.parentElement.classList.contains('store-item-icon')){
        // you can see its sibling element
        // console.log(event.target.parentElement);
        // traverse up the dom to get to the img element
        // console.log(event.target.parentElement.previousElementSibling.src);
        let fullPath = event.target.parentElement.previousElementSibling.src;

        // next i need to parse the string so I can use thumbnail img that matches the bigger img
        // indexOf() it tells you the position of the img
        //  I add 3 b/c 'img' is length of 3
        let pos = fullPath.indexOf('img') + 3;
        // => pos is index of array img
        // console.log(pos); 
        // console.log(fullPath); 
        // => img/sweets-2.jpeg > img-cart/sweets-2.jpeg
        //  slice(1: index where we want to start removing, 2:how many to remove? if no second param is given it will take off til the end of the string)

        let partPath = fullPath.slice(pos);
        // let's view partial path on console.
        // console.log(partPath);
        // here try taking out +3 in pos.  notice you are getting the img/!
        // let pos = fullPath.indexOf('img'); 
        // => img/doughnut-2.jpeg
        const item = {};
        // get the folder where I am getting img from
        item.img = `img-cart${partPath}`;

        // console.log(item); // => {img: "img-cart/cupcake-3.jpeg"}

      }
    });
  });
})();
