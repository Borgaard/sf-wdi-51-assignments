import React from 'react';
import Gallery from "./Gallery/Gallery";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Archive from "./Archive/Archive";
import Header from "./Header/Header";

const Index = () => {
    return (
        <div>
            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />
        </div>
    )
};

export default Index;