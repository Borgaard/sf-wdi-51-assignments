// wait for DOM to load before running JS
$(document).ready(function() {

  // base API route
  const baseUrl = '/api/todos';

  // array to hold todo data from API
  let allTodos = [];

  // element to display list of todos
  const $todosList = $('#todos-list');

  // form to create new todo
  const $createTodo = $('#create-todo');

  const renderAll = () => {
    $todosList.empty();
    // render all todos to view
    allTodos.forEach( todo => render(todo) );
  }

  // helper function to render all todos to view
  // note: we empty and re-render the collection each time our todo data changes
  render = todo => {
    // empty existing todos from view

    // pass `allTodos` into the template function
    let todosHtml = `
        <li class="list-group-item todo" data-id="${todo._id}">

          <!-- todo label (task) -->
          <span class="label label-default">${todo.task}</span>

          <!-- todo description -->
          ${todo.description}

          <div class="pull-right">
            <!-- pencil icon to toggle update form -->
            <a href="javascript:void(0)" data-toggle="collapse" data-target="#update-${todo._id}">
              <span class="glyphicon glyphicon-pencil"></span>
            </a>

            <!-- trash can icon to delete todo -->
             <a href="javascript:void(0)" class="delete-todo">
              <span class="glyphicon glyphicon-trash"></span>
            </a>
          </div>

          <!-- form to update todo -->
          <div class="collapse" id="update-${todo._id}">
            <br>
            <form class="form-inline update-todo">
              <div class="form-group">
                <input type="text" name="task" class="form-control" placeholder="Task" value="${todo.task}">
              </div>
              <div class="form-group">
                <input type="text" name="description" class="form-control" placeholder="Description" value="${todo.description}">
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-block btn-default" value="Update">
              </div>
            </form>
          </div>
        </li>
      `
    // append html to the view
    $todosList.append(todosHtml);
  };

  // GET all todos on page load
  $.ajax({
    method: "GET",
    url: baseUrl,
    success: json => {
      // set `allTodos` to todo data (json.data) from API
      allTodos = json.data
      // render all of the todos we receieved
      renderAll()
    }
  });

  // listen for submit even on form
  $createTodo.on('submit', event => {
    event.preventDefault();

    // serialze form data
    let newTodo = $(event.currentTarget).serialize();

    // POST request to create new todo
    $.ajax({
      method: "POST",
      url: baseUrl,
      data: newTodo,
      success: json => {
        console.log(json);
        // add new todo to `allTodos`
        allTodos.push(json);
        // render one todo to view
        render(json);
      }
    });
    // reset the form
    $createTodo[0].reset();
    $createTodo.find('input').first().focus();
  });

  // add event-handlers to todos for updating/deleting
  $todosList

    // for update: submit event on `.update-todo` form
    .on('submit', '.update-todo', event => {
      event.preventDefault();

      // find the todo's id (stored in HTML as `data-id`)
      let todoId = $(event.currentTarget).closest('.todo').attr('data-id');

      // find the todo to update by its id
      let todoToUpdate = allTodos.find(function (todo) {
        return todo._id == todoId;
      });

      // serialze form data
      let updatedTodo = $(event.currentTarget).serialize();
      // PUT request to update todo
      $.ajax({
        type: 'PUT',
        url: baseUrl + '/' + todoId,
        data: updatedTodo,
        success: json => {
          // replace todo to update with newly updated version (json)
          allTodos.splice(allTodos.indexOf(todoToUpdate), 1, json);
          // render all todos to view
          renderAll();
        }
      });
    })

    // for delete: click event on `.delete-todo` button
    .on('click', '.delete-todo', event => {
      event.preventDefault();

      // find the todo's id (stored in HTML as `data-id`)
      var todoId = $(event.currentTarget).closest('.todo').attr('data-id');

      // find the todo to delete by its id
      var todoToDelete = allTodos.find( todo => todo._id == todoId );
      console.log("DELETING: ", todoId)
      // DELETE request to delete todo
      $.ajax({
        type: 'DELETE',
        url: baseUrl + '/' + todoId,
        success: json => {
          console.log("DELETED", json)
          // remove deleted todo from all todos
          allTodos.splice(allTodos.indexOf(todoToDelete), 1);

          // render all todos to view
          renderAll();
        }
      });
    });

});
