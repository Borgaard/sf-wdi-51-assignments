import axios from 'axios';

const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {
    static all(){
        let request = axios.get(endPoint);
        return request
    }
    //Creating the create method called from todosContainer (Parent)
    static create(todo) {
        let request = axios.post(endPoint, todo);
        return request;
    }
}
export default TodoModel