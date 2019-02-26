import React, { Component } from 'react';
import './index.css';
import NavBar from './NavBar';
import HeroHeader from './HeroHeader';
import Archive from './Archive';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

class  Monument extends Component {
  render() {
    return (
      <main>
       <NavBar /> 
       <HeroHeader /> 
       <Archive /> 
       <About /> 
       <Gallery /> 
       <Contact /> 
       <Footer /> 
      </main>

    )
  }
}

 export default Monument;


