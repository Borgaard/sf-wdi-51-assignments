import axios from 'axios';
var qs = require('querystring');

const endPoint = `https://mysterious-plains-17292.herokuapp.com/api/books`;

class BookModel {
    static find(_id){
        let request =axios.get(`${endPoint}/${_id}`);
        return request
    }

    static allbooks(){
        let request = axios.get(endPoint);
        return request;
    }

    static create = (book) => {
        let query = qs.stringify(book);
        console.log('query', query);
        let request = axios.post(endPoint, query);
        return request;
      }

    static delete(_id){
        let request = axios.delete(`${endPoint}/${_id}`)
        return request
    }

    static update = (book) => {
        let query = qs.stringify(book);
        console.log('query', query);
        let request = axios.put(`${endPoint}/${book._id}`, query);
        return request;
      }
}

export default BookModel;