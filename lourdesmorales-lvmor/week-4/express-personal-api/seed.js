// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');


  const books_seed = [
    {
    title: "Little Cat",
    author: "John",
    image: "https://citationlabs.com/linkbuildingbook/",
    releaseDate: "2008",
    characters: "Mary"
    },
    {
        title: "Little Dog",
        author: "Nick",
        image: "https://citationlabs.com/linkbuildingbook/",
        releaseDate: "2008",
        characters: "Mary"
        }
  ];


db.Books.deleteMany({}, (err, books) => {
    console.log("removed all books")
    db.Books.create(books_seed, (err, books) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("recreated all books");
        console.log("created", books.length, "books");
    })
});