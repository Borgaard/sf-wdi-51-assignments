import React, { Component } from 'react';
import Pet from './Pet.js';

class PetList extends Component {
  render() {
    let pets = this.props.info.map( (pet, index) => {
      return (
        <Pet key={index} pet={pet} />
      );
    });

    return (
      <div>
        <p>I've had a few pets in my life.</p>
        {pets}
      </div>
    );
  }
}

export default PetList;