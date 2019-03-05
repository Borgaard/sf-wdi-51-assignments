// import { Book } from "../../models";

// console.log("Sanity Check: JS is working!");

// let $book_list;
// let allBooks = [];

$(document).ready(function(){
    console.log("Sanity Check: JS is working!");
    // my empty html div
    // $book_list = $('#listview');
    let book_list = $('#listview').text();
    let bookId = '';
    

    // READ Books out
    $.ajax({
        method: 'GET',
        url: '/api/book',
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(book) {
        for (i = 0; i < book.length; i++) {
            $('#listview').append( `<li> Book: ${book[i].title}</li>`);
        }
    }

    function handleError(e) {
        console.log('something went wrong');
        $('#listview').text('Failed to load books, is the server working?');
    };

    // CREATE new Book
    $('#newBookForm').on('submit', function(e) {
        e.preventDefault();
        // console.log('something worked, keep debugging', $(this).serializeArray());
        
        // let newBook = 
        
        $.ajax({
            method: 'POST',
            url: '/api/book',
            data: $(this).serialize(),
            // data: {
            //     author: author,
            //     title: title,
            //     mainCharacter: mainCharacter
            // },
            success: newBookSuccess,
            error: newBookError
        });
    });
    function newBookSuccess() {
        console.log("newBook")
        $('#listView').append( `<li> Book: ${this.title}, ${this.author}, ${this.mainCharacter}</li>`);
    }

    function newBookError() {
        console.log('no new book');
    }


    // update a book
    $("#updateButton").on('click', function(e) { 
        e.preventDefault();
        let newBookUpdate = $(this).parent().find("input").val();
        $.ajax({
            method: "PUT",
            url:`/api/books/${ $(this).attr('data-id')}`,
            data: {
                    author: author,
                    title: title,
                    mainCharacter: mainCharacter
                },
            success: updatedBookSuccess
        });
    });

    function updatedBookSuccess(book) {
        console.log("updated my Book");
    }


    // Delete a Book


});




