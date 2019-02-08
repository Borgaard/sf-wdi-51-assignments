/*PARIS'S LATEST ATTEMPT*/
/*PARIS'S LATEST ATTEMPT*/
/*PARIS'S LATEST ATTEMPT*/
/*PARIS'S LATEST ATTEMPT*/
/*PARIS'S LATEST ATTEMPT*/

//grocery stock as objects 
	var stock = {
	  fruit: [	
	    {name: "Apple", description: "This is an apple.", price: 2.99, image: "./assets/apples.jpg", id: "apple", div: document.getElementById("apple")},
	    {name: "Banana", description: "This is a banana.", price: 1.99, image: "./assets/bananas.jpg", id: "banana", div: document.getElementById("banana")},
		{name: "Orange", description: "This is an orange.", price: 3.99, image: "./assets/oranges.jpg", id: "orange", div: document.getElementById("orange")},
		{name: "Mango", description: "This is a mango.", price: 4.99, image: "./assets/mango.jpg", id: "mango", div: document.getElementById("mango")},
		{name: "Kiwi", description: "This is a kiwi.", price: 2.99, image: "./assets/kiwi.jpg", id: "kiwi", div: document.getElementById("banana")}
	  ],
	  veggies: [
	  	{name: "Eggplant", description: "This is an eggplant.", price: 2.99, image: "./assets/eggplant.jpg", id: "eggplant", div: document.getElementById("eggplant")},
		{name: "Broccoli", description: "This is a broccoli.", price: 2.99, image: "./assets/broccoli.jpg", id: "broccoli", div: document.getElementById("broccoli")},
		{name: "Mushroom", description: "This is an mushroom.", price: 3.99, image: "./assets/mushroom.jpg", id: "mushroom", div: document.getElementById("mushroom")},
		{name: "Cucumber", description: "This is a cucumber.", price: 4.99, image: "./assets/cucumber.jpg", id: "cucumber", div: document.getElementById("cucumber")},
		{name: "Potato", description: "This is a potato.", price: 4.99, image: "./assets/potato.jpg", id: "potato", div: document.getElementById("potato")}
	  ],
	  seafood: [
		{name: "Salmon", description: "This is salmon.", price: 8.99, image: "./assets/salmon.jpg", id: "salmon", div: document.getElementById("salmon")},
		{name: "Crab", description: "This is a crab.", price: 10.99, image: "./assets/crab.jpg", id: "crab", div: document.getElementById("crab")},
		{name: "Lobster", description: "This is an lobster.", price: 12.99, image: "./assets/lobster.jpg", id: "lobster", div: document.getElementById("lobster")},
		{name: "Tuna", description: "This is a tuna.", price: 12.99, image: "./assets/tuna.jpg", id: "tuna", div: document.getElementById("tuna")},
		{name: "Shrimp", description: "This is a shrimp.", price: 6.99, image: "./assets/shrimp.jpg", id: "shrimp", div: document.getElementById("shrimp")}
	  ]
	};

	//function to create tiles based on available stock
	let masonaryFruit = $('#card-columns-fruit');

	stock.fruit.forEach(fruit => {
		masonaryFruit.append(`
			<div id="${fruit.id}" class="card">
	          <img src=${fruit.image} class="card-img-top" alt="...">
	          <div class="card-body ${fruit.name}>
	            <h5 class="card-title">${fruit.name}</h5>
	            <p class="card-text">${fruit.description}</p>
	            <p class="card-text price"><small class="text-muted">$${fruit.price}</small></p>
	          </div>
	        </div>
		`)
		let addItem = $(`#${fruit.id}`);
		addItem.addEventListener("click", function(){
	})

	let masonaryVeggies = $('#card-columns-veggies');

	stock.veggies.forEach(veggies => {
		masonaryVeggies.append(`
			<div id="${veggies.id}" class="card">
	          <img src=${veggies.image} class="card-img-top" alt="...">
	          <div class="card-body ${veggies.name}>
	            <h5 class="card-title">${veggies.name}</h5>
	            <p class="card-text">${veggies.description}</p>
	            <p class="card-text price"><small class="text-muted">$${veggies.price}</small></p>
	          </div>
	        </div>
		`)

	})
	let masonarySeafood = $('#card-columns-seafood');

	stock.seafood.forEach(seafood => {
		masonarySeafood.append(`
			<div id="${seafood.id}" class="card">
	          <img src=${seafood.image} class="card-img-top" alt="...">
	          <div class="card-body ${seafood.name}>
	            <h5 class="card-title">${seafood.name}</h5>
	            <p class="card-text">${seafood.description}</p>
	            <p class="card-text price"><small class="text-muted">$${seafood.price}</small></p>
	          </div>
	        </div>
		`)
	})

	//listen for a click on the card, add it to the cart
	// retrieve info from the card object and add it to the cart descriptions
	// I want to retrieve the same values from above to the cart
	//if clicked item equals id in stock array then append with data
	let cartList = $(`#toCart`);
	
		

	/*cartList.append(`
			<tr>
              <td data-th="">
                <div class="row">
                  <div class="col-lg-3 hidden-xs"><img src="" alt="..." class="img-responsive"/></div>
                  <div class="col-lg-9">
                    <h4 class="nomargin"></h4>
                    <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </td>
              <td data-th="Price">$1.99</td>
              <td data-th="Quantity">
                <input type="number" class="form-control text-center" value="1">
              </td>
              <td data-th="Subtotal" class="text-center">1.99</td>
              <td class="actions" data-th="">
                <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
                <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>                
              </td>
            </tr>
        `)
	e.stopPropagation();
})*/