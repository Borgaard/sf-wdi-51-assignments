import React, { Component } from 'react';
import NavBar from './NavBar/Nav';
import Header from './Index/Header/Header'
import About from './Index/About/About';
import Archive from './Index/Archive/Archive';
import Gallery from './Index/Gallery/Gallery';
import Contact from './Index/Contact/Contact';
import Footer from './Footer/Footer';

class Index extends Component{
    render(){
        return(
            <div> 
           <NavBar />
           <Header />
           <About />
           <Archive />
           <Gallery />
           <Contact />
           <Footer />
           </div>
        )
    }
}

export default Index;