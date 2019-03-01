var googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=isbn:";

$('form').on('submit', function(e) {
  e.preventDefault();

  var isbn = $('#isbn').val();

  $.ajax({
      method: 'GET',
      url: googleBooksUrl + isbn,
      success: bookSuccess,
      error: bookError
  });
});

function bookSuccess ( response ) {
  console.log(response);
  var bookInfo = response.items[0].volumeInfo;

  var listItemHTML = `<li>
                        <h2>${bookInfo.title}</h2>
                        <p>${bookInfo.description}</p>
                        <img src="${bookInfo.imageLinks.thumbnail}">
                        <a href="${bookInfo.previewLink}">Preview Book</a>
                      </li>`

  $('.books').append(listItemHTML);
}

function bookError ( error, error2, error3 ){
  console.log(error);
  console.log(error2);
  console.log(error3);
  alert(error2);
}
