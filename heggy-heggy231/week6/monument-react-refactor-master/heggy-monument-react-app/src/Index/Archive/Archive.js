import React, { Component } from 'react';
// to get to the img I need to import each one with rel file path
import Img1 from './article_1.jpg';
import Img2 from './article_2.jpg';
import Img3 from './article_3.jpg';

class Archive extends React.Component {
  // what should my component render?
  render() {
    return (
      <section>
		<h2>From the Archive</h2>

		<div class="grid-wrapper articles">
			<article class="col-third">
				<img src={Img1} alt="" />
				<div>
					<h3>Issue Twenty &mdash; The Southwest</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
					<button>Read More</button>
				</div>
			</article>
			<article class="col-third">
				<img src={Img2} alt="" />
				<div>
					<h3>Issue Nineteen &mdash; Camping</h3>
					<p>Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.</p>
					<button>Read More</button>
				</div>
			</article>
			<article class="col-third">
				<img src={Img3} alt="" />
				<h3>Issue Eighteen - Food</h3>
				<p>Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?</p>
				<button>Read More</button>
			</article>
		</div>
	</section>
    );
  }
}

export default Archive;