import React, { Component } from 'react';
import axios from 'axios';
import CreateDestinationForm from '../components/CreateDestinationForm.js';
import DestinationList from '../components/DestinationList.js';

class DestinationContainer extends Component {
  state = {
    destinations: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3001/destinations').then( (response) => {
      this.setState({
        destinations: response.data,
      });
    });
  };

  createDestination = (destination) => {
    // [] HOW TO PASS MULTIPLE INPUTS TO A NEW DATABASE ENTRY? AN INPUT FOR CITY NAME, AN INPUT FOR COUNTRY, AN INPUT FOR IMAGE, ETC.
    console.log(destination);
    let newDest = {
      city: destination,
    };

    axios.post('http://localhost:3001/destinations', newDest).then( (response) => {
      console.log(newDest);
      let destinations = this.state.destinations;
      // adds new destination created in db to front-end array of destinations
      destinations.push(response.data);
      console.log(destinations);
      this.setState({
        destinations: destinations,
      });
    });
  };

  deleteDest = (destToDelete) => {
    console.log(destToDelete);
    // destToDelete is the clicked on destination on front end,
    // sends to back end to be deleted
    // [] THIS URL RETURNS 404 NOT FOUND
    axios.delete(`http://localhost:3001/destinations/${destToDelete._id}`).then( (response) => {
      // filters front end array of destinations to not show the newly deleted destination
      let destinations = this.state.destinations.filter( function(dest) {
        console.log(dest._id);
        console.log(response.data._id);
        return dest._id !== response.data._id;
      });

      this.setState({
        destinations: destinations,
      });
    });
  };

  render() {
    console.log(this.state.destinations);
    return (
      <div>
        <h2>Places I've Been</h2>
        <CreateDestinationForm add={this.createDestination} />
        <DestinationList info={this.state.destinations} delete={this.deleteDest} />
      </div>
    );
  }
}

export default DestinationContainer;