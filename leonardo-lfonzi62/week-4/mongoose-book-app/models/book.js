const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// data types are upper cacse in the new schema model 
const BookSchema = new Schema ({
title: String,
author: {
    type: Schema.Types.ObjectId,
    ref:'Author'
},
image: String,
date: String

});

const Book = mongoose.model('Book',BookSchema);
// makes the book model avaiable to other files
module.exports = Book;