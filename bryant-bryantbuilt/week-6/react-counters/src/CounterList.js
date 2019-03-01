import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
    render () {
        let counterArr = [];

        for (let i = 0; i < this.props.numOfCounters; i++) {
            counterArr.push(<Counter />);
        }
        return (
            <div className="Counter-row">
                {counterArr}
            </div>
        )
    }
}

export default CounterList