import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    addCount = (e) => {
        e.preventDefault();
        console.log('Add button');
        this.setState({
            count: this.state.count + 1
        });
    }

    subtractCount = (e) => {
        console.log('Subtract button');
        e.preventDefault();
        this.setState({
            count: this.state.count - 1
        });
    }

    render () {
        return (
            <div className="Counter">
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.subtractCount}>Decrement</button>
                <button onClick={this.addCount}>Increment</button>

            </div>
        )
    }
}

export default Counter