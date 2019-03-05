import React, { Component } from 'react';
import './App.css';
import './style.css';


class Guide extends Component {
  render() {
    return (
    <section className="gallery">
		<div className="wrap">
			<h3>A visual guide to the Southwest</h3>
			<div className="masonry">
				<img src="images/gallery_1.jpg" alt=""/>
				<img src="images/gallery_3.jpg" alt=""/>
				<img src="images/gallery_4.jpg" alt=""/>
				<img src="images/gallery_2.jpg" alt=""/>
				<img src="images/gallery_5.jpg" alt=""/>
				<img src="images/gallery_6.jpg" alt=""/>
			</div>
		</div>
	</section>

    );
  }
}

export default Guide;


