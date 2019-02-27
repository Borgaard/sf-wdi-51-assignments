import React, { Component } from "react";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import Contact from "./Contact/Contact";

class blog extends Component {
  render() {
    return (
      <div>
        <Header />
        <MidSection />
        <Contact />
      </div>
    );
  }
}

export default blog;
