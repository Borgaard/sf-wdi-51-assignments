import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodosList from '../components/TodosList'

class TodosContainer extends Component {
    state = {
        todos: []
    };

    // on container mount fetch data
    componentDidMount() {
        this.fetchData();
    }

    // function to pull the data from the axios call in todo
    fetchData() {
        TodoModel.all().then( (res) => {
            this.setState({
                todos: res.data.todos,
                todo: ''
            })
        });
    }

    render() {

        return (
            <div className='todosContainer'>
                <TodosList todos={this.state.todos} />
            </div>
        )
    }
}

export default TodosContainer