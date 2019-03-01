import React, {Component} from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
    state = {
        formStyle: {display: 'block'}
    }

    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
    }

    toggleBodyForm = () => {
        (this.state.formStyle.display === 'block')?
          this.setState({formStyle: {display: 'none'}, bodyStyle: {display:'block'} })
        :
          this.setState({formStyle: {display:'block'}, bodyStyle: {display: 'none'}})
        
    }

    render(){
        return(
        <li data-todos-index={this.props.todo._id}>
            <div>
                <span>{this.props.todo.body}</span>
                <a className='edit' onClick={this.toggleBodyForm}>Edit</a>
                <a className='remove' onClick={this.deleteClickedTodo}>Remove</a>
            </div>
            {this.props.editingTodoId === this.props.todo._id ?
                <TodoForm
                    todo={this.prop.todo}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update Todo!"
                    updateTodo={this.props.updateTodo}
                    toggleBodyForm={this.toggleBodyForm} /> :  ''
            }
        </li>
        )
    }
}

export default Todo