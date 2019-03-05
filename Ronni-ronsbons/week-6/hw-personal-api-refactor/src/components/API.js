import React, { Component } from 'react';
import axios from 'axios';

class API extends Component {
  state = {
    api: '',
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api').then( (response) => {
        this.setState({
          api: JSON.stringify(response.data),
        });
      });
  };

  render() {
    return (
      <div>
        <h3>API Documentation</h3>
        <p>{this.state.api}</p>
      </div>
    );
  };
};

export default API;