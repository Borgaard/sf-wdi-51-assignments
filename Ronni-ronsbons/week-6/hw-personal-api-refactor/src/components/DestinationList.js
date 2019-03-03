import React, { Component } from 'react';
import Destination from './Destination.js';

class DestinationList extends Component {
  render() {
    let destinations = this.props.info.map( (destination, index) => {
      return (
        <Destination
          key={index}
          destination={destination}
          delete={this.props.delete} />
      );
    });

    return (
      <div>
        <h3>(DestinationList)</h3>
        {destinations}
      </div>
    );
  }
}

export default DestinationList;