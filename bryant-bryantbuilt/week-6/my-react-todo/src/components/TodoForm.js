import React, { Component } from 'react';

class TodoForm extends Component {
    
    onChange = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        let todo = this.state.todo
        this.props.updateTodo(todo)
        this.setState({
            todo: ""
        })
    }

    render() {
        return (
            <div style={this.props.style} className='todoForm'>
                <form onSubmit={this.onSubmit}>
                    <input
                        autoFocus={this.props.autoFocus}
                        onChange={this.onChange}
                        placeholder='Write todo here...'
                        type='text'
                        value={(this.state && this.state.todo) || ''} />
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default TodoForm