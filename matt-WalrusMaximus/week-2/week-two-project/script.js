$(document).ready(function () {
    

    // Create object library full of our store content, img location and titles
    let categories = {
            hair: [
            {
                img: 'images/Hair1.png',
                title: 'Comb',
            },
            {
                img: 'images/Hair2.png',
                title: 'Wax',
            },
            {
                img: 'images/Hair3.png',
                title: 'Mustache Oil',
            },
            {
                img: 'images/Hair2.jpg',
                title: 'Scissors',
            }
            ],
            tusk: [
                {
                    img: 'images/Tusk1.jpg',
                    title: 'Toothbrush',
                },
                {
                    img: 'images/Tusk2.jpg',
                    title: 'Tusk Jewelry',
                },
                {
                    img: 'images/Tusk3.jpg',
                    title: 'Toothpaste',
                },
                {
                    img: 'images/Tusk4.jpg',
                    title: 'Floss',
                }
            ],
            skin: [
                {
                    img: 'images/Skin1.jpg',
                    title: 'Wrinkle Cream',
                },
                {
                    img: 'images/Skin2.jpg',
                    title: 'Lotion',
                },
                {
                    img: 'images/Skin3.png',
                    title: 'Balm',
                },
                {
                    img: 'images/Skin4.jpg',
                    title: 'Babyoil',
                }
            ],
            food: [
                {
                    img: 'images/Food1.jpg',
                    title: 'Sea Cucumber',
                },
                {
                    img: 'images/Food2.jpeg',
                    title: 'Clam',
                },
                {
                    img: 'images/Food3.jpeg',
                    title: 'Shramps',
                },
                {
                    img: 'images/Food6.jpg',
                    title: 'Ice Cream',
                }
                ]
            }

            // click function to populate store when #hair is clicked
    $('#hair').on("click", function() {
        $('#store').empty();

        for (i=0;i<categories.hair.length;i++)
        $('#store').append(`<li>
                                <img class="store-img" src=${categories.hair[i].img}>
                                <a href="#" class="addItem">${categories.hair[i].title}</a>
                            </li>`)
    })

    $('#tusk').on("click", function() {
        $('#store').empty();

        for (i=0;i<categories.tusk.length;i++)
        $('#store').append(`<li>
                                <img class="store-img" src=${categories.tusk[i].img}>
                                <a href="#" class="addItem">${categories.tusk[i].title}</a>
                            </li>`)
    })
    $('#skin').on("click", function() {
        $('#store').empty();

        for (i=0;i<categories.skin.length;i++)
        $('#store').append(`<li>
                                <img class="store-img" src=${categories.skin[i].img}>
                                <a href="#" class="addItem">${categories.skin[i].title}</a>
                            </li>`)
    })
    $('#food').on("click", function() {
        $('#store').empty();

        for (i=0;i<categories.food.length;i++)
        $('#store').append(`<li>
                                <img class="store-img" src=${categories.food[i].img}>
                                <a href="#" class="addItem">${categories.food[i].title}</a>
                            </li>`)
    })


    // function to populate shopping list when .addItem class is clicked
    $(document).on("click", ".addItem", function() {
        $('#shop-list').append(`<li>${this.text}</li>`);

    })
});