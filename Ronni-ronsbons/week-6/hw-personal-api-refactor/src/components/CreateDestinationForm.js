import React, { Component } from 'react';

class CreateDestinationForm extends Component {
  state = {
    city: '',
  };

  onInputChange = (event) => {
    // [] HOW TO CAPTURE MULTIPLE INPUTS IN ORDER TO FILL OUT COUNTRY, IMAGE, FAVORITE FOOD, ETC.?
    this.setState({
      city: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    let destination = this.state.city;
    console.log(destination);
    this.props.add(destination);
    this.setState({
      city: '',
    });
  };

  render() {
    return (
      <div>
        <h4>Add a Place</h4>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="test"
            onChange={this.onInputChange}
            value={this.state.city} />
          <button type="submit" placeholder="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateDestinationForm;