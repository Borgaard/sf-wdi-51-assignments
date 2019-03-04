import React, { Component } from 'react';
// Import the Search file to your Home file.
// updating to the new next child SearchContainer that has logic
import SearchContainer from './components/SearchContainer';

class Home extends Component {
  render() {
    return (
// Remember to put all html inside parent wrapper!!
      <div>
        <h1>Hello World! Heggy here</h1>
        <section>
          {/* Import & render the Search file to your Home file. */}
          <SearchContainer />
        </section>
      </div>

    );
  }
}

export default Home;