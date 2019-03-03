import axios from 'axios';

const endPoint = `https://mysterious-plains-17292.herokuapp.com/api`;

class BookModel {
    static all(){
        let request =axios.get(endPoint)
        return request
    }

    static allbooks(){
        let request = axios.get(endPoint + '/books');
        return request;
    }

    static postbook(book) {
        console.log(book);
        let request = axios({
            url: endPoint + '/books',
            method: 'post',
            data: book,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        });
        return request;
    }
}

export default BookModel;