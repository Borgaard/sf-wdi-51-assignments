$(document).ready(function () {
  $('#taskForm').on('submit', function (e) {
    e.preventDefault();
    let item = $('input').val();
    if (item !== '') {
      var newItem = '<li><input type="radio" class="radio" name="taskComplete" />' + item +'<a href="" class="edit">Edit</a>'+ ' <a href="" class="remove">Remove</a></li>';
      $('#taskList').append(newItem);
      // $('#comment').val('');
    }
  });

  $('#taskList').on('click', '.remove', function (evt) {
    evt.preventDefault();
    $(this).parent().remove();
  });

 $('#taskList li input').on('change', function() {
    $(this).parent().toggleClass(‘completed’);
  })
});
