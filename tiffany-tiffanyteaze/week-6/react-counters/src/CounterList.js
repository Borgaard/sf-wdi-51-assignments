import React, {Component} from 'react';
import Counter from './Counter'

class CounterList extends Component {
    state = {
        counters: this.props.counter
      }
    render() {
      let list = [<Counter />, <Counter />, <Counter />];
      return (
        <div className="Counter-row">
            <p>Your number of counters is: {this.state.counters}</p>
          {list}
        </div>
      );
    }
  }

export default CounterList;