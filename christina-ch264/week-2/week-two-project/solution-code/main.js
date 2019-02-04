// Items in our shopping cart
var shoppingCart = [];

// Cereal items
var cerealItems = [
	{
		img: './images/cereal/cheerios.jpg',
		name: 'Cheerios'
	},
	{
		img: './images/cereal/crunch.jpg',
		name: 'Crunch'
	},
	{
		img: './images/cereal/fruit-loops.jpg',
		name: 'Fruit Loops'
	},
	{
		img: './images/cereal/puffs.jpg',
		name: 'Puffs'
	},
	{
		img: './images/cereal/raisin-bran.jpg',
		name: 'Raisin Bran'
	}
];

// Juice items
var juiceItems = [
	{
		img: './images/juice/apple-juice.jpg',
		name: 'Apple Juice'
	},
	{
		img: './images/juice/carrot-juice.jpg',
		name: 'Carrot Juice'
	},
	{
		img: './images/juice/grape-juice.jpeg',
		name: 'Grape Juice'
	},
	{
		img: './images/juice/Orange-juice.jpg',
		name: 'Orange Juice'
	},
	{
		img: './images/juice/tomato-juice.jpg',
		name: 'Tomato Juice'
	}
];

// Candy items
var candyItems = [
	{
		img: './images/candy/kit-kat.jpg',
		name: 'Kit Kat'
	},
	{
		img: './images/candy/m&ms.jpg',
		name: 'M&M\'s'
	},
	{
		img: './images/candy/skittles.jpg',
		name: 'Skittles'
	},
	{
		img: './images/candy/snickers.jpg',
		name: 'Snickers'
	},
	{
		img: './images/candy/twix.jpg',
		name: 'Twix'
	}
];


// Add click handlers to our category buttons
$('#cereal').click(function() {
	addShoppingItems('cereal');
});

$('#juices').click(function() {
	addShoppingItems('juices');
});

$('#candy').click(function() {
	addShoppingItems('candy');
});

// Add click handlers to each shopping item
$('#shopping-items').on('click', '.shopping-item', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});

// Add shopping items to our page
function addShoppingItems(category) {
	// first, clear out all items I am currently showing
	clearShoppingItems();

	var myItems;
	switch(category) {
		case 'cereal':
			myItems = cerealItems;
			break;
		case 'juices':
			myItems = juiceItems;
			break;
		case 'candy':
			myItems = candyItems;
			break;
		default:
	}

	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(
			`<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name}</p>
			</li>`);
	}

	$('#shopping-items').append(newList);
}

// Clear our current shopping-items
function clearShoppingItems() {
	$('#shopping-items').empty();
}

// Add item to shopping cart
function addItemToShoppingCart(item) {
	$('#shopping-cart ul').append(`
		<li>
			${item}
		</li>
	`);
}
