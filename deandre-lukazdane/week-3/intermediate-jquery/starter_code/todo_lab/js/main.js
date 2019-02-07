
//when #taskForm submit select input, get value
$('#taskForm').on('submit', function addNewItem(event) {
	event.preventDefault();
	let itemText = $('#newItemDescription').val();
	$('#newItemDescription').val('');
	let newListItem = '<li><input type="checkbox"><span class="item">' + itemText + '</span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a></li>';
	$('#taskList').append(newListItem);
});
// checkboxes parent/completed toggle
$('li').on('change', 'input[type="checkbox"]', function() {
$(this).parent().toggleClass('completed');
});
//remove item
$('#taskList').on('click', '.remove', function() {
$(this).sibling().remove();	
});
// $('#taskList').on('click', '.edit', editItem);$('#taskList').on('submit', '.editor', saveItem) {

// });
// $('#taskList').on('submit', '.editor', saveItem);
// $('#deleteTasks').on('click', deleteTasks);
// $('#clearCompleted').on('click', clearCompleted)



