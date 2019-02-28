import React, {Component} from 'react';

class About extends Component {
    render() {
        let aboutList = [{
            header: "About the Magazine",
            title: "A Lifestyle Magazine Crafted with Love",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaque facere quibusdam rerum, maiores consequuntur, aliquam esse blanditiis eum a libero fuga consectetur non neque amet rem impedit quos, fugit. Culpa ratione iure facilis est ea, ducimus neque voluptas fugiat velit unde ipsam suscipit laudantium cupiditate, officiis eaque id? Eaque ad, nisi assumenda facere qui accusantium alias, fugit adipisci natus.Dignissimos quasi nisi maiores dolor sunt. Fuga unde, rem quo sint dolore est pariatur cupiditate nostrum et suscipit, aperiam aliquam officia libero vel error modi ratione, dolorem consectetur doloribus mollitia! Temporibus aliquid laboriosam expedita quia, id consectetur culpa? Enim iusto ab facere aliquid cumque aut amet tenetur dolores, iure tempora perspiciatis incidunt eveniet nostrum, ea esse doloribus labore unde nobis?"
        },
    ]

        // let renderedAboutList = aboutList.map((about, index) => {
        //     return about.header, about.title, about.text;
        // })

        return(
            <section id="about" className="callout about">
		<article className="wrap">
			<h2> {this.props.header}</h2>
			<h3>{this.props.title}</h3>
			<p>{this.props.text} </p>
		</article>
	</section>
        )
    }
}
export default About;