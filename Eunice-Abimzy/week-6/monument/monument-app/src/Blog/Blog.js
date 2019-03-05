import React, { Component } from 'react'
import './blog.css';
import Header from './Header'
import Nav from '../NavBar'
import Main from './Main'
import AboutUs from './AboutUs'
import Issues from './Issues'
import Comment from './Comment'
import Footer from './Footer'


class Blog extends Component {
    render () {
        return (
<div className="blog-page">
  <Header />
  <Nav />
  <Main />
    <aside>
	  <AboutUs />
	  <Issues />
    </aside>
	<Comment />
    <Footer />
</div>
        )
    }
}
export default Blog