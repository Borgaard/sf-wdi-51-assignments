// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


const db = require('./models');

const books_list = [
    {
        title: 'The name of the Wind',
        author: 'Patrick Rothfuss',
        date: '2009',
        mainCharacter: 'Kvothe'
    },
    {
        title: 'Assassins Apprentice',
        author: 'Robin Hobb',
        date: '1999',   
        mainCharacter: 'Fitz'
    }
];

db.Book.deleteMany({}, function(err, books) {
    console.log('removed all books');

    books_list.forEach(function (bookData) {
        var book = new db.Book({
            title: bookData.title,
            author: bookData.author,
            date: bookData.date,
            mainCharacter: bookData.mainCharacter
        });

        book.save(function(err, savedBook) {
            if (err) {
                console.log(err);
            }
            console.log('saved ' + savedBook.title + ' by ' + savedBook.author);
        });
    });
});