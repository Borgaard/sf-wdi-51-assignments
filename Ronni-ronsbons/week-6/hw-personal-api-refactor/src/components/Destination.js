import React, { Component } from 'react';

class Destination extends Component {
  deleteDestination = (event) => {
    console.log(this.props.destination);
    event.preventDefault();
    // this.props.destination is the destination passed to the delete function
    this.props.delete(this.props.destination);
  };

  render() {
    return (
      <div>
        <h3>{this.props.destination.city} - {this.props.destination.country}
          <span><button onClick={this.deleteDestination}>Delete</button></span>
        </h3>
        <img src={this.props.destination.image} alt={this.props.destination.city} />
        <p>{this.props.destination.date}</p>
        <p>Favorite Food: {this.props.destination.favoriteFood}</p>
      </div>
    );
  }
}

export default Destination;