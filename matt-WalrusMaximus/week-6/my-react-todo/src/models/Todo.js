import axios from "axios";

const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {
    static all() {
        let request = axios.get(endPoint)
<<<<<<< HEAD
        return request;
    }
    static create(todo) {
        // static makes it so we can invoke with instanticiating the request
        let request = axios.post(endPoint, todo);
        return request;
    }
    static delete(todo) {
        let request = axios.delete(`${endPoint}/${todo._id}`);
        return request;
=======
        return request
>>>>>>> 565996ace3e32c9f7426c55684217eeabab45a7b
    }
}

export default TodoModel