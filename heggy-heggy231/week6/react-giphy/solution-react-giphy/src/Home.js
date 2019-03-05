import React, { Component } from 'react';
import SearchContainer from './components/SearchContainer';

class Home extends Component {
  render() {
    return (
      <main>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Giphy Search</h1>
            <p className="lead text-muted">The true source for all things giphy...</p>
          </div>
        </section>

        <section className="container">
          <SearchContainer/>
        </section>
      </main>
    );
  }
}

export default Home;
