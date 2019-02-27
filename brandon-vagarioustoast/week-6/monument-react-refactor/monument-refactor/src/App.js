import React, { Component } from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Index from "./Index/Index";
import Blog from "./Blog/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Blog />
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
