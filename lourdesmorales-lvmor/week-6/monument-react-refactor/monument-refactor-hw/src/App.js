import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Index from "./Index/Index";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <Blog /> */}
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
