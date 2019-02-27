import React, {Component} from 'react';
import Header from './Header/Header.js';
import Archive from './Archive/Archive.js';
import About from './About/About.js';
import Gallery from  './Gallery/Gallery.js';
import Contact from './Contact/Contact.js';

class Index extends Component {
    render(){
        return (
        <div>
            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />
        </div>
    )
}
}

export default Index;