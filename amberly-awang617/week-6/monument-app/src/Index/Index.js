import React, { Component } from 'react';
import Header from './Header/Header';
import Archive from './Archive/Archive';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact'

class Main extends Component {
    render() {
        return (
            <main>
                <Header />
                <Archive />
                <About />
                <Gallery />
                <Contact />
            </main>
        )
    }
}

export default Main;