import React, { Component } from 'react';
import axios from 'axios';
import PetList from './PetList.js';

class Profile extends Component {
  state = {
    profile: [],
    pets: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3001/profile').then( (response) => {
      this.setState({
        profile: response.data,
        pets: response.data.pets,
      });
    });
  };

  render() {
    console.log(this.state.pets);

    return (
      <div>
        <h2>Profile page</h2>
        <p>My name is: {this.state.profile.name}</p>
        <p>I currently live in: {this.state.profile.currentCity}</p>
        <p>I am: a web developer</p>
        <p>My GitHub username is: {this.state.profile.githubUsername}</p>
        <p>My GitHub link is: {this.state.profile.githubLink}</p>
        <PetList info={this.state.pets} />
        {/* {pets} */}
      </div>
    );
  }
}

export default Profile;