import axios from 'axios'

const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {
  static all(){
      console.log("i am inside todos.all")
      //promise is going to do a functionality grap data then respond with data return
    let request = axios.get(endPoint)
    return request
  }
  static create(todo) {
      let request = axios.post(endPoint, todo);
      return request
  }
  static update(todoId, updateInfo){
    let request = axios.put(`${endPoint}/${todoId}`, updateInfo)
    return request
  }
  static delete(todo) {
      let request = axios.delete(`${endPoint}/${todo._id}`)
      return request
  }
}

export default TodoModel