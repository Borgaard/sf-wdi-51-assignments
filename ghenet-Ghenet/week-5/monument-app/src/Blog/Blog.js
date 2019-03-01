import React from 'react';
import Nav from './Header/Nav';
import PostSection from './Main/PostsList/PostSection';
import Contact from './Footer/Contact';

const blog = ()=>{
    return (
        <div>
        <Nav />
        <PostSection />
        <Contact />
     </div>
    )
}

export default blog;