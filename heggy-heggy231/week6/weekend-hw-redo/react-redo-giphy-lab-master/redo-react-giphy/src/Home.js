import React, { Component } from 'react';
// Import the Search file to your Home file.
import Search from './components/Search';

class Home extends Component {
  render() {
    return (
// Remember to put all html inside parent wrapper!!
      <div>
        <h1>Hello World! Heggy here</h1>
        <section>
          {/* Import & render the Search file to your Home file. */}
          <Search />
        </section>
      </div>

    );
  }
}

export default Home;