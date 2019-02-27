import React, { Component } from "react";
import Header from "./Header/Header";
import Archive from "./Archive/Archive";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Archive />
        <About />
        <Gallery />
        <Contact />
      </div>
    );
  }
}
// const index = () => {
//   return (
//     <div>
//       <Header />
//       <Archive />
//       <About />
//       <Gallery />
//       <Contact />
//     </div>
//   );
// };

export default index;
