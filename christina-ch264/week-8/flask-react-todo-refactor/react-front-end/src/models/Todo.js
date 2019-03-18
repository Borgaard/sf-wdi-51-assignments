import axios from 'axios'

const url = `http://localhost:8000/todos`

class TodoModel {
  static all = () =>{
    let request = axios.get(`${url}`)
    return request
  }

  static create = (todo) => {
    let request = axios.post(`${url}`, todo)
    return request
  }

  static delete = (todo, deleteObject) => {
    console.log(todo.id)
    console.log(deleteObject)
    console.log(`deleting ${todo.body}`)
    let request = axios.delete(`${url}/${todo.id}`, deleteObject)
    return request
  }

  static update = ( todoId, updateObject) => {
    console.log(todoId)
    console.log(updateObject)
    let request = axios.put(`${url}/${todoId}`, updateObject)
    return request
  }


}

export default TodoModel