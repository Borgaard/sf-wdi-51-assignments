import React, { Component } from 'react';
import SearchContainer from './components/SearchContainer';
import './App.css';

class Home extends Component {
  render() {
    return (
      <main>
        <section className="App">
          <div>
            <h1>Giphy Search</h1>
            <p>What are you looking for???</p>
          </div>
        </section>

        <section>
          <SearchContainer/>
        </section>
      </main>
    );
  }
}

export default Home;