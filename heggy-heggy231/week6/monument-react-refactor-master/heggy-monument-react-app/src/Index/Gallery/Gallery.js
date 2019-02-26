// import React, it Component lib rom react
import React, { Component } from 'react';
// get style sheet Gallery.css
import Gallery from './Gallery.css';
// get photos
import Galimg1 from './gallery_1.jpg';
import Galimg2 from './gallery_2.jpg';
import Galimg3 from './gallery_3.jpg';
import Galimg4 from './gallery_4.jpg';
import Galimg5 from './gallery_5.jpg';
import Galimg6 from './gallery_6.jpg';


class Index extends Component {
  render () {
    return (
      <section id="gallery">
		<div class="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div class="masonry">
				<img src={Galimg1} alt="" />
				<img src={Galimg2} alt="" />
				<img src={Galimg3} alt="" />
				<img src={Galimg4} alt="" />
				<img src={Galimg5} alt="" />
				<img src={Galimg6} alt="" />
			</div>
		</div>
	</section>
    )
  }
}

export default Gallery;