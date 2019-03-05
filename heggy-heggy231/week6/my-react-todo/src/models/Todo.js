import axios from 'axios'
// use back tick to make the string concat easy
const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {

  static all(){
    // get request will get endpoint, it will come back with json obj
    // we know it is json since when you visit https://super-crud-api.herokuapp.com/api/todos
    //  data is in json.  Here we are getting ready for call for todo list
    //  promise will do some functionality and return with something else
    //  Go to the endPoint and respond with data we want return back to user 
    let request = axios.get(endPoint);
    // debugger;
    return request;
  }
  // Using axios, we create the todo. In the promise, we fetch all the todos and set the state to encapsulates those todos from the response.

  static create(todo) {
    let request = axios.post(endPoint, todo);
    return request;
  }

  static update(todoId, updateInfo) {
    let request = axios.put(`${endPoint}/${todoId}`, updateInfo)
    return request
  }

  static delete(todo) {
  // provide the thing I am deleting
  // `https://super-crud-api.herokuapp.com/api/todos`/jldjfad adding the todo._id url

    let request = axios.delete(`${endPoint}/${todo._id}`);
    return request;
  }

}

export default TodoModel