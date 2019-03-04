console.log("Sanity Check: JS is working!");
var $booksList;
var allBooks = [];

$(document).ready(function(){

  $booksList = $('#bookTarget');
  $.ajax({
    method: 'GET',
    url: '/api/books',
    success: handleSuccess,
    error: handleError
  });

  $('#newBookForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/books',
      data: $(this).serialize(),
      success: newBookSuccess,
      error: newBookError
    });
  });

  $booksList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/books/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/books/'+$(this).attr('data-id'),
      success: deleteBookSuccess,
      error: deleteBookError
    });
  });


  $booksList.on('click', '.edit-book-button', function() {
    console.log('clicked edit button');
    $(this).parent().find(".edit-input").show();

  });

  $booksList.on('click', '.edit-book-submit-button', function() {
    $(this).parent().hide();
    let newTitle = $(this).parent().find("input").val();
    $.ajax({
      method: "PUT",
      url: `/api/books/${ $(this).attr('data-id') }`,
      data: { title: newTitle },
      success: console.log("success")
    })

  })

});

function getBookHtml(book) {
  return `<hr>
          <p>
            <b>${book.title}</b>  
           by  ${(book.author) ? book.author.name : 'null'}

            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${book._id}>Delete</button>
            
            <span class="edit-input" style="display: none">
              <input type="text" value="${book.title}" />
              <button class="edit-book-submit-button" data-id="${book._id}">Save</button>
            </span>

            <button class="edit-book-button">Edit</button>
            <br>

          </p>`;
}

function getAllBooksHtml(books) {
  return books.map(getBookHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $booksList.empty();

  // pass `allBooks` into the template function
  var booksHtml = getAllBooksHtml(allBooks);

  // append html to the view
  $booksList.append(booksHtml);
};

function handleSuccess(json) {
  allBooks = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#bookTarget').text('Failed to load books, is the server working?');
}

function newBookSuccess(json) {
  $('#newBookForm input').val('');
  allBooks.push(json);
  render();
}

function newBookError() {
  console.log('newbook error!');
}

function deleteBookSuccess(json) {
  var book = json;
  console.log(json);
  var bookId = book._id;
  console.log('delete book', bookId);
  // find the book with the correct ID and remove it from our allBooks array
  for(var index = 0; index < allBooks.length; index++) {
    if(allBooks[index]._id === bookId) {
      allBooks.splice(index, 1);
      break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteBookError() {
  console.log('deletebook error!');
}
