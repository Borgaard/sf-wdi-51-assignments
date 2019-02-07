console.log("Im working!")

let hair = [
    {
        img: 'images/Hair1.png',
        title: 'Comb',
    },
    {
        img: '/images/Hair2.png',
        title: 'Wax',
    },
    {
        img: './images/Hair3.png',
        title: 'Oil',
    },
    {
        img: './images/Hair4.png',
        title: 'Scissors',
    }
];

let tusk = [
    {
        img: './images/Tusk1.jpg',
        title: 'Toothbrush',
    },
    {
        img: './images/Tusk2.jpg',
        title: 'Ring',
    },
    {
        img: './images/Tusk3.jpg',
        title: 'Toothpaste',
    },
    {
        img: './images/Tusk4.jpg',
        title: 'Floss',
    }
];

let skin = [
    {
        img: './images/Skin1.jpg',
        title: 'Wrinkle',
    },
    {
        img: './images/Skin2.jpg',
        title: 'Lotion',
    },
    {
        img: './images/Skin3.jpg',
        title: 'Balm',
    },
    {
        img: './images/Skin4.jpg',
        title: 'Babyoil',
    }
];

let food = [
    {
        img: './images/Food1.jpg',
        title: 'Sea Cucumber',
    },
    {
        img: './images/Food2.jpeg',
        title: 'Clam',
    },
    {
        img: './images/Food3.jpeg',
        title: 'Shramps',
    },
    {
        img: './images/Food4.jpg',
        title: 'Snails',
    },
    {
        img: '.images/Food5.jpg',
        title: 'Fish',
    },
    { 
        img: '.images/Food6.jpg',
        title: 'Ice Cream',
    }
];

function hairPop() {
    populateShop('hair');
}

// document.getItemById('store-pop').on('click', '.store-item', function() {
// 	var itemName = this.title();
// 	addToCart(itemName);
// });

function populateShop(type) {
    // emptyShop();

    let category;
    switch(type) {
        case 'hair':
            category = hair;
            break;
        case 'tusk':
            category = tusk;
            break;
        case 'skin':
            category = skin;
            break;
        case 'food':
            category = food;
            break;
        default:
            console.log("Unexpected shop item type, what did you press??")
    }

    let newShop = "";
    for (let i = 0; i < category.length; i++) {
        let v = category[i];

        document.getElementById(store).appendChild(
            `<li class="store-items">
                <img src="${v.img}">
                <p>${v.title}</p>
            </li>`);
    }

}


