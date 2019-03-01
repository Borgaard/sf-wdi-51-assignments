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
    let request = axios.get(endPoint)
    // debugger;
    return request
  }
}

export default TodoModel