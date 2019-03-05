import React from 'react';
import Gallery from './Gallery/Gallery'
import Archive from './Archive/Archive'
import About from './About/About';
import Header from './Header/Header';
import Contact from './Contact/Contact';

const index = () => {
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

export default index;