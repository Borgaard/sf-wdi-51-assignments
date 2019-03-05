import React, { Component } from 'react'

class Gallery extends Component {
    render (){
        return (
            <section id="gallery">
		<div class="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div class="masonry">
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
export default Gallery