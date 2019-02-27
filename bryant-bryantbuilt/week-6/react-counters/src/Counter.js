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
                <p>Counter: {this.state.count}</p>
                <button onClick={this.addCount}>+</button>
                <button onClick={this.subtractCount}>-</button>
            </div>
        )
    }
}

export default Counter