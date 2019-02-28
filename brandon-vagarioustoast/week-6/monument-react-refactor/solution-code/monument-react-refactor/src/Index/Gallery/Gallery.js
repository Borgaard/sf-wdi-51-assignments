import React from 'react';
import Gallery1 from './gallery_1.jpg';
import Gallery2 from './gallery_2.jpg';
import Gallery3 from './gallery_3.jpg';
import Gallery4 from './gallery_4.jpg';
import Gallery5 from './gallery_5.jpg';
import Gallery6 from './gallery_6.jpg';
import './Gallery.css'

const gallery = () => {
    return (
        <section id="gallery">
		<div class="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div class="masonry">
				<img src={Gallery1} alt="" />
				<img src={Gallery3} alt="" />
				<img src={Gallery4} alt="" />
				<img src={Gallery2} alt="" />
				<img src={Gallery5} alt="" />
				<img src={Gallery6} alt="" />
			</div>
		</div>
	</section>
    )
}

export default gallery;