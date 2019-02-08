var stock = {};
window.onload = function (stock) {
    stock = {
      fruit: [  
       	  {name: "Apple", description: "This is where a description of an apple goes.", price: 2.99, image: "./assets/apples.jpg", id: "apple", div: document.getElementById("apple")},
       	  {name: "Banana", description: "This is where a description of a banana goes.", price: 1.99, image: "./assets/bananas.jpg", id: "banana", div: document.getElementById("banana")},
          {name: "Orange", description: "This is where a description of an orange goes.", price: 3.99, image: "./assets/oranges.jpg", id: "orange", div: document.getElementById("orange")},
          {name: "Mango", description: "This is where a description of a mango goes.", price: 4.99, image: "./assets/mango.jpg", id: "mango", div: document.getElementById("mango")},
          {name: "Kiwi", description: "This is where a description of a kiwi goes.", price: 2.99, image: "./assets/kiwi.jpg", id: "kiwi", div: document.getElementById("banana")}
      ],
      veggies: [
        {name: "Eggplant", description: "This is where a description of an eggplant goes.", price: 2.99, image: "./assets/eggplant.jpg", id: "eggplant", div: document.getElementById("eggplant")},
        {name: "Broccoli", description: "This is where a description of a broccoli goes.", price: 2.99, image: "./assets/broccoli.jpg", id: "broccoli", div: document.getElementById("broccoli")},
        {name: "Mushroom", description: "This is where a description of a mushroom goes.", price: 3.99, image: "./assets/mushroom.jpg", id: "mushroom", div: document.getElementById("mushroom")},
        {name: "Cucumber", description: "This is where a description of a cucumber goes.", price: 4.99, image: "./assets/cucumber.jpg", id: "cucumber", div: document.getElementById("cucumber")},
        {name: "Potato", description: "This is where a description of a potato goes.", price: 4.99, image: "./assets/potato.jpg", id: "potato", div: document.getElementById("potato")}
      ],
      seafood: [
        {name: "Salmon", description: "This is salmon goes.", price: 8.99, image: "./assets/salmon.jpg", id: "salmon", div: document.getElementById("salmon")},
        {name: "Crab", description: "This is where a description of a crab goes.", price: 10.99, image: "./assets/crab.jpg", id: "crab", div: document.getElementById("crab")},
        {name: "Lobster", description: "This is where a description of an lobster goes.", price: 12.99, image: "./assets/lobster.jpg", id: "lobster", div: document.getElementById("lobster")},
        {name: "Tuna", description: "This is where a description of a tuna goes.", price: 12.99, image: "./assets/tuna.jpg", id: "tuna", div: document.getElementById("tuna")},
        {name: "Shrimp", description: "This is where a description of a shrimp goes.", price: 6.99, image: "./assets/shrimp.jpg", id: "shrimp", div: document.getElementById("shrimp")}
      ]};
  //function to create tiles based on available stock
  let masonaryFruit = $('#card-columns-fruit');
  stock.fruit.forEach(fruit => {
    
    masonaryFruit.append(`
      <div id="${fruit.id}" class="card">
        <img src="${fruit.image}" class="card-img-top" alt="...">
        <h5 class="card-title">${fruit.name}</h5>
        <p class="card-text">${fruit.description}</p>
        <p class="card-text price"><small class="text-muted">$${fruit.price}</small></p>
      </div>
    `)
  });
  // listen for a click on the card, add it to the cart
  // retrieve info from the card object and add it to the cart descriptions
  // I want to retrieve the same values from above to the cart
  document.addEventListener("click", addToCart, false)
  function addToCart(e) {
    let fruitCart = $('#cart');
    
    if (e.srcElement.parentNode.classList.contains("card")) {
      e.preventDefault();
      e.stopPropagation();
      let cardId = e.srcElement.parentNode.id;
      
      //if clicked item equals id, then append with data
      let foundItem = stock.fruit.find(ele => {
        return ele.id === cardId
      })
      console.log(foundItem);
      fruitCart.append(`
        <tr>
          <td data-th="Producct">
            <div class="row">
              <div class="col-lg-3 hidden-xs"><img src="${foundItem.image}" alt="..." class="card-img-top"/></div>
              <div class="col-lg-9">
                <h4 class="nomargin">${foundItem.name}</h4>
                <p>${foundItem.description}</p>
              </div>
            </div>
          </td>
          <td data-th="Price">${foundItem.price}</td>
          <td data-th="Quantity">
            <input type="number" class="form-control text-center" value="1">
          </td>
          <td data-th="Subtotal" class="text-center">${foundItem.price}</td>
          <td class="actions" data-th="">
            <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>                
          </td>
        </tr>
      `);
    }
  };
};
