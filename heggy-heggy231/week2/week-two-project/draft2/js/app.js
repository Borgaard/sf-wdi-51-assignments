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
      console.log(event.target);
    })

  })
})();
