import React, {Component} from 'react';


class Counter extends Component {
    state = {
        counterIndex:1
    }
    increaseCount = () => {
        let newCount = this.state.counterIndex + 1;
        this.setState({
            counterIndex:newCount
        })
    };

    decreaseCount = () => {
        let newCount = this.state.counterIndex - 1;
        this.setState({
            counterIndex:newCount
        })
    }
    render(){
        return(
            <div className="Counter">
                <h4>Counter :{this.state.counterIndex}</h4>
                <button class="buttons" onClick={this.decreaseCount}>Decrement</button>
                <button class="buttons" onClick={this.increaseCount}>Increment</button>
            </div>
        )
    }
}

export default Counter