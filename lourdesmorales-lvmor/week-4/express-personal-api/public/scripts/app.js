console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

// AJAX call to get all books


  function loadBooks() {

    $('#booksTable tbody').empty();
    $.ajax({
        method: "GET",
        url: '/api/books',
        success: function(response){
          console.log("success got data", response);
    
          response.forEach(row => {
            $('#booksTable').append('<tr><td>' + row.title + '</td><td>' + row.author + '</td><td>' + row.releaseDate + '</td><td>' 
            + '<button id="' + row._id + '" class="btn btn-warning editbook">Edit</button>&nbsp;'
            + '<button id="' + row._id + '" class="btn btn-danger deletebook">Delete</button></td>'
            +'</tr>');
          });
    
        },
        error: function(error) {
            console.log("an error occurred", error);
        }
      });
  }

  loadBooks();

  $('#newBookForm').submit(function(e) {
    e.preventDefault();

    $.ajax({
        method: "POST",
        url: '/api/books',
        data: $(this).serialize(), // this = form | This line attach form data to ajax request.
        success: function(result) {
            loadBooks();
            console.log(result);
        },
        error: function(error) {
            console.log(error);
        }
    });
  });


  $(document).on('click', '.deletebook', function() {
      if(confirm('Are you sure you want to delete this book?')) {                
        $.ajax({
            method: "DELETE",
            url: '/api/books/' + $(this)[0].id,
            data: $(this).serialize(), // this = form | This line attach form data to ajax request.
            success: function(result) {
                loadBooks();
                console.log(result);
            },
            error: function(error) {
                console.log(error);
            }
        });
        console.log('Deleted', $(this)[0].id);
      }
  });


  $(document).on('click', '.editbook', function() {
    alert('edit');
});


});
