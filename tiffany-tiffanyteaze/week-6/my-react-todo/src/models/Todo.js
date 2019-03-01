//putting axios call in model makes this axios call reusable
import axios from 'axios'

const endPoint = `https://super-crud-api.herokuapp.com/api/todos`;

class TodoModel {
    static all(){
        let request = axios.get(endPoint)
        return (request)
    }
    static create(todo) {
        let request = axios.post(endPoint, todo);
        return request;
    }

    static delete(todo){
        let request = axios.delete(`${endPoint}/${todo._id}`)
        return request
      }
}

export default TodoModel;