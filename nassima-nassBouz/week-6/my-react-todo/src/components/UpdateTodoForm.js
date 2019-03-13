import React, { Component } from 'react'

class UpdateTodoForm extends Component{
    state = {
        todo: this.props.todo
    }
    onChange  = (event)=>{
        this.setState({
            todo: event.target.value
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        let todo = this.state.todo
        this.props.updateTodo(todo)
        this.setState({
            todo: ''
        })
    }
    render(){
        return (
            <div  className='updateTodoForm'>
              <form onSubmit={ this.onSubmit }>
                <input
                //   autoFocus={this.props.autoFocus}
                  onChange={ this.onChange }
                  placeholder='update to do form'
                  type='text'
                //   if evaluates to false return empty string
                  value={(this.state && this.state.todo) || ''} />
                <button type='submit'>Save</button>
              </form>
            </div>
          )
    }
}

export default UpdateTodoForm;