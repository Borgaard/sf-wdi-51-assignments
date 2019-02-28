// install and import Axios, put Axius inside a search function

import React, { Component } from 'react';
// import {
//     Route,
//     Link,
//     Switch
// } from 'react-router-dom';
import Home from './Components/Main/Home';
import SearchContainer from './Components/Main/SearchContainer';


// import Footer from './Footer/Footer'

class App extends Component {
    render() {
        return (
        <div className="App">
            <Home />
            <SearchContainer />
        </div>
        );
    }
}

export default App;