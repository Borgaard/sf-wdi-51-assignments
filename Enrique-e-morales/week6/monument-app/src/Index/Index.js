import React, { Component } from 'react';
import Header from './Header/Header';
import Archive from './Archive/Archive';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';


class Index extends Component {
    render() {
        return(
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

export default Index;