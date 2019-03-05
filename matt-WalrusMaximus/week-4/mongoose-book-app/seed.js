// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

let books_list = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
    releaseDate: "July 11, 1960",
    // characters: "biff mclargehuge"
  },
  {
    title: "The Great Gatsby",
    author: "F Scott Fitzgerald",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
    releaseDate: "April 10, 1925",
    // characters: "biff mclargehuge"
  },
  {
    title: "Les Miserables",
    author: "Victor Hugo",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
    releaseDate: "Unknown 1862",
    // characters: "biff mclargehuge"
  },
  {
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
    releaseDate: "January 30, 1873",
    // characters: "biff mclargehuge"
  },
  {
    title: "Lean In",
    author: "Sheryl Sandberg",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
    releaseDate: "March 11, 2013",
    // characters: "biff mclargehuge"
  },
  {
    title: "The Four Hour Workweek",
    author: "Tim Ferriss",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
    releaseDate: "April 1, 2007",
    // characters: "biff mclargehuge"
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
    releaseDate: "Unknown 1937",
    // characters: "biff mclargehuge"
  },
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
    releaseDate: "Unknown 1597",
    // characters: "biff mclargehuge"
  }
];

var authors_list = [
  {
    name: "Harper Lee",
    alive: false
  },
  {
    name: "F Scott Fitzgerald",
    alive: false
  },
  {
    name: "Victor Hugo",
    alive: false
  },
  {
    name: "Jules Verne",
    alive: false
  },
  {
    name: "Sheryl Sandberg",
    alive: true
  },
  {
    name: "Tim Ferriss",
    alive: true
  },
  {
    name: "John Steinbeck",
    alive: false
  },
  {
    name: "William Shakespeare",
    alive: false
  }
];

let character_list = [
  {
    name: "biff mclargehuge"
  },
  {
    name: "biff mclargehuge"
  },
  {
    name: "biff mclargehuge"
  },
  {
    name: "biff mclargehuge"
  },
  {
    name: "biff mclargehuge"
  },
  {
    name: "biff mclargehuge"
  },
  {
    name: "biff mclargehuge"
  },
  {
    name: "biff mclargehuge"
  },
];

// remove all records that match {} -- which means remove ALL records
db.Author.deleteMany({}, function(err, authors) {
  console.log('removed all authors');
  db.Author.create(authors_list, function(err, authors){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all authors');
    console.log("created", authors.length, "authors"); 

      db.Book.deleteMany({}, function(err, books){
        console.log('removed all books');
        // creates a loop that creates each book in data model as an object
        books_list.forEach(function (bookData) {
          var book = new db.Book({
            // populates each book individually from the object above
            title: bookData.title,
            image: bookData.image,
            releaseDate: bookData.releaseDate,
            characters: bookData.characters,
          });

          // looks for the author in the seed data and grabs it from the author array instead
          db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
            console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
            if (err) {
              console.log(err);
              return;
            }
            book.author = foundAuthor;
            book.save(function(err, savedBook){
              if (err) {
                console.log(err);
              }
              console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
              console.log(savedBook)
            
            });
          });
        });
      });
    });
  });
