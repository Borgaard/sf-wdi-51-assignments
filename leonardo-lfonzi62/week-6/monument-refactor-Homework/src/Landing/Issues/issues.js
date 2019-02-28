import React, {Component} from 'react';
import image1 from '../../images/gallery_1.jpg';
import image2 from '../../images/gallery_3.jpg';
import image3 from '../../images/gallery_4.jpg';
import image4 from '../../images/gallery_2.jpg';
import image5 from '../../images/gallery_5.jpg';
import image6 from '../../images/gallery_6.jpg';

class Issue extends Component {
    render() {
        return (
        <section id="gallery">
		<div className="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div className="masonry">
				<img src={image1} alt=""/>
				<img src={image2} alt=""/>
				<img src={image3} alt=""/>
				<img src={image4} alt=""/>
				<img src={image5} alt=""/>
				<img src={image6} alt=""/>
			</div>
		</div>
	</section>
        )
    }
}

export default Issue;



