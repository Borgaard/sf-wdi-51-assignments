import React, {Component} from 'react';
import MidSection from './Midsection/MidSection.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
// import Navbar from './Navbar/Navbar';

class Blog extends Component {
    render(){
        return (
        <div>
            {/* <Navbar /> */}
            <Header />
            <MidSection />
            <Footer />
        </div>
    )
}
};

export default Blog;