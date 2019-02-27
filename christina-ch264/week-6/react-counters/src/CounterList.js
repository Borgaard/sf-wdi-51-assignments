// takes number of counters as prop
// render that many versions of counter component
// render <h4> counter: 0 </h4>

import React, {Component} from 'react';
import Counter from './Counter';

class CounterList extends Component {
    render() {
        let listArray = [];
        // counter is defined in app.js and is the state of the number of counter compos in counterList
        for (let i = 0; i < this.props.counter; i++) {
            listArray.push(<Counter />);
        } 
        return (
            // embed listArray in div on page
            <div className="Counter-row">{listArray}</div>
        )  
    }
}


export default CounterList;