// import Compenent here! since I am creating component
import React, { Component } from 'react';
//  get the img 
import BlogImg1 from './blog_1.jpg';
import BlogImg2 from './blog_2.jpg';
import AboutUs from './AboutUs/AboutUs';

class Midsection extends Component {
  render () {
    return (
      <div className="wrap grid-wrapper">
      <section>
        <article>
          <h3>11/23/2016</h3>
          <h2>A Visual Guide to the Southwest</h2>
          <img src={BlogImg1} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos consequuntur aliquam nobis velit mollitia iste, natus ex repellendus delectus quisquam et quae, in atque a. Perspiciatis excepturi ipsum temporibus, eius odit deleniti quasi voluptates eaque aliquam, iste consequatur repudiandae illo a. Voluptates eligendi reiciendis corporis itaque soluta fugit atque quaerat ipsum reprehenderit sapiente, voluptatem repellat eveniet fuga natus tempore modi vero distinctio nulla accusantium recusandae, omnis. Esse aliquam ea, similique repudiandae nihil numquam, neque enim perspiciatis. Facilis dolor praesentium impedit quidem, non unde accusantium, commodi error, soluta dolores modi blanditiis similique amet hic earum, reiciendis consectetur animi in. Exercitationem distinctio necessitatibus molestias quas laboriosam nam modi porro accusantium blanditiis, beatae incidunt aliquid nostrum laborum, magni cum recusandae autem doloremque qui perferendis iste non quaerat fugit. Aspernatur voluptatem impedit, enim!</p>
          <img src={BlogImg2} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos consequuntur aliquam nobis velit mollitia iste, natus ex repellendus delectus quisquam et quae, in atque a. Perspiciatis excepturi ipsum temporibus, eius odit deleniti quasi voluptates eaque aliquam, iste consequatur repudiandae illo a. Voluptates eligendi reiciendis corporis itaque soluta fugit atque quaerat ipsum reprehenderit sapiente, voluptatem repellat eveniet fuga natus tempore modi vero distinctio nulla accusantium recusandae, omnis. Esse aliquam ea, similique repudiandae nihil numquam, neque enim perspiciatis. Facilis dolor praesentium impedit quidem, non unde accusantium, commodi error, soluta dolores modi blanditiis similique amet hic earum, reiciendis consectetur animi in. Exercitationem distinctio necessitatibus molestias quas laboriosam nam modi porro accusantium blanditiis, beatae incidunt aliquid nostrum laborum, magni cum recusandae autem doloremque qui perferendis iste non quaerat fugit. Aspernatur voluptatem impedit, enim!</p>
        </article>
      </section>
    <AboutUs />
    </div>
    )
  }
}

export default Midsection;