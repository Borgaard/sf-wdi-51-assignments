import React, { Component } from 'react';

class Pet extends Component {
  // [] HOW TO TRANSLATE BOOLEAN VALUE TO A STRING?
  render() {
    return (
      <div>
        <p>{this.props.pet.name} is a {this.props.pet.type}.</p>
      </div>
    );
  }
}

export default Pet;