import React, {Component} from 'react';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Archive from './Archive/Archive';
// import Navbar from '../Navbar/Navbar';
// import Header from '../Header/Header';


class Main extends Component{
    render() {
        return (
            <div>
                {/* <Navbar/> */}
                {/* <Header/> */}
                <About/>
                <Archive/>
                <Gallery/>
                <Contact/>
            </div>
        )
    }
}

export default Main;