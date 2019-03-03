import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {

  render() { 
    return (
      <div>
        <Form appName={"Favorite Books"} searchName={"Title"}/>
      </div>
      );
  }
}
 
export default App;