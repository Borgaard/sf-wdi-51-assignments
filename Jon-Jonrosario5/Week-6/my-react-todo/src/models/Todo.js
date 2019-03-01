import axios from 'axios';

const endpoint = `https://super-crud-api.herokuapp.com/api/todos`;

class TodoModel {
    static all(){
        let request = axios.get(endpoint)
        return(request)
    }
}

export default TodoModel;