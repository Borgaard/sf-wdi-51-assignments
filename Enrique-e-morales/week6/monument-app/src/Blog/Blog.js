import React, { Component } from 'react';
import MidSection from './MidSection/MidSection';
import Header from './Header/Header';
import Contact from './Contact/Contact';

class Blog extends Component {
    render(){
        return(
            <div>
                <Header />
                <MidSection />
                <Contact />
            </div>
        )
    }
}

export default Blog;