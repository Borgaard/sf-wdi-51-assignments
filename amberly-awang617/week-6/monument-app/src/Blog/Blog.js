import React, { Component } from 'react';
import BlogHeader from './BlogHeader/BlogHeader'
import Navbar from '../Navbar/Navbar'
import Main from './Main/Main'


class Blog extends Component {
	render() {
		return (
			<div>
			<BlogHeader />
			<Navbar />
			<Main />
			</div>
		)
	}
}

export default Blog;