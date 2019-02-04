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