import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
    state = {
        counterArr: []
    }
    render () {
        return (
            <div className="Counter-row">
                <Counter />
            </div>
        )
    }
}

export default CounterList