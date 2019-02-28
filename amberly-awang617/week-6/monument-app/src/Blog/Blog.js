import React, { Component } from 'react';
import BlogHeader from './BlogHeader/BlogHeader'
import Navbar from '../Navbar/Navbar'
import Main from './Main/Main'
import Footer from '../Footer/Footer'


class Blog extends Component {
	render() {
		return (
			<div>
			<BlogHeader />
			<Navbar />
			<Main />
			<Footer />
			</div>
		)
	}
}

export default Blog;