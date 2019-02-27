// export mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose helps you connect with mongoDB datamodel
const BookSchema = new Schema ({
  title: String,
  author: String,
  image: String,
  date: String
});


// book.js  model 2 parameter name of the model it is variable 'Book' or 'Heggy' whatever same as the model book I am working with.  BookSchema knows properties of BookSchema
var Book = mongoose.model('Book', BookSchema);

// module.export will contain Book it is special nodejs file 
// var Book = mongoose.model('Book', BookSchema); we are referring to this when we .exports to the entire schema const BookSchema = new Schema ({
  //title: String,
  //author: String,
  //image: String,
  //date: String
//});
// https://git.generalassemb.ly/sf-wdi-51/mongoose-book-app/blob/master/docs/sprint1.md#3-outgrowing-arrays-as-a-datastore
module.exports = Book;