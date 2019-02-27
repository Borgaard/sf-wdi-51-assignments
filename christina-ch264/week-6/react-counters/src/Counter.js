import React, {Component} from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    increaseHandler = () => {
        const count = this.state.count + 1;
        console.log("increasing count")
        this.setState ({
            count 
        })
    }
    
    decreaseHandler = () => {
        const count = this.state.count -1;
        console.log("decreasing count")
        this.setState ({
            count
        })
    }
    
    render() {
        return (
            <div className="Counter">
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.increaseHandler}>incrementing</button>
                <button onClick={this.decreaseHandler}>decrementing</button>
            </div>
        )
    }
}
export default Counter;
