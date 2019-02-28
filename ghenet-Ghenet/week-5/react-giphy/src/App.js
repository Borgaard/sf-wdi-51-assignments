import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GiphyList from './components/GiphyList'
import SearchBar from './components/SearchBar'
import _ from 'lodash'

const API_KEY = "iqhkltdPbQN8PlLydc4BXLPGzRYycxFj";

class App extends Component {
  constructor() {
    super()

    this.state = {
      gifs: {}
    }
  }

  componentDidMount() {
    this.getMeGifs("it works")
  }

  getMeGifs(searchTerm) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=24`)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          alert("Error")
        } else {
          this.setState({
            gifs: json
          })
        }
      })
  }

  render() {
    const getMeGifs = _.debounce((searchTerm) => { this.getMeGifs(searchTerm) }, 200)

    if (!this.state.gifs.data) {
      return null
    } else {
      return (
        <div className="ui grid container" align="center">
          <SearchBar onChange={(searchTerm) => getMeGifs(searchTerm)} />
         <br />
         <br />
         
          <div className="ui grid">
            <GiphyList gifs={this.state.gifs.data} />
          </div>
          <h5>Ohh yes it works Ghenet</h5>
        </div>
      );
    }
  }
}

export default App;