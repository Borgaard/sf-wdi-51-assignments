import React, { Component } from 'react';
import Search from './components/Search';

class Home extends Component {
  render() {
    return (
// Remember to put all html inside parent wrapper!!
      <main>
        <h1>Hello World! Heggy here</h1>
        <section>
          {/* Import & render the Search file to your Home file. */}
          <Search />
        </section>
      </main>

    );
  }
}

export default Home;