// http://youmightnotneedjquery.com/




// Items in our shopping cart
var shoppingCart = [];

// Bakery items
var bakeryItems = [
	{
		img: './images/bakery/blonde_rolls.png',
		name: 'Blonde Dinner Rolls',
		price: 3.99
	},
	{
		img: './images/bakery/cran-nut.jpg',
		name: 'Cranberry Pistachio Loaf',
		price: 4.99
	},
	{
		img: './images/bakery/peach_plum_yeast.png',
		name: 'Peach-Plum Yeast Cakes',
		price: 0.99
	},
	{
		img: './images/bakery/rewena_paraoa.jpg',
		name: 'Maori Potato Bread',
		price: 4.99
	},
	{
		img: './images/bakery/white.jpeg',
		name: 'Plain White Loaf',
		price: 3.99
	}
];

// Dairy items
var dairyItems = [
	{
		img: './images/dairy/2529300274cf.gif',
		name: 'Silk Original',
		price: 3.99
	},
	{
		img: './images/dairy/cashew_unsweetened-whitewave.png',
		name: 'Carrot Juice',
		price: 3.99
	},
	{
		img: './images/dairy/probio.png',
		name: 'Silk Probiotic',
		price: 4.99
	},
	{
		img: './images/dairy/protein.png',
		name: 'Silk Protein Plus',
		price: 4.99
	},
	{
		img: './images/dairy/silk-cashew-milk-chocolate.jpg',
		name: 'Silk Cashew D. Choc',
		price: 3.99
	}
];


// Spirits items
var spiritsItems = [
	{
		img: './images/spirits/tyku.png',
		name: 'Tyku',
		price: 14.99
	},
	{
		img: './images/spirits/silver.png',
		name: 'Tyku: Silver',
		price: 15.99
	},
	{
		img: './images/spirits/TY-KU-Sake-White.png',
		name: 'Tyku: White',
		price: 15.99
	},
	{
		img: './images/spirits/TY-KU-Sake-Black.png',
		name: 'Tyku: Black',
		price: 19.99
	},
	{
		img: './images/spirits/ty-ku-citrus-liqueur.jpg',
		name: 'Tyku: Citrus',
		price: 14.99
	}
];

// Add click handlers to our category buttons
$('#bakery').click(function() {
	addShoppingItems('bakery');
});

$('#dairy').click(function() {
	addShoppingItems('dairy');
});


$('#spirits').click(function() {
	addShoppingItems('spirits');
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
		case 'bakery':
			myItems = bakeryItems;
			break;
		case 'dairy':
			myItems = dairyItems;
			break;
		case 'spirits':
			myItems = spiritsItems;
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
				<p> ${currentItem.price}</p>
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
