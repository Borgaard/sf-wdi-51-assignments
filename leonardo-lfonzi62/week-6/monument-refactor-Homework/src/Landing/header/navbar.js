import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div> 
              <header className="vertical-center">
          <div>
            <h1><a href="/">Monument</a></h1>
            <h2>{this.props.title}</h2>
          </div>
        </header>
                <nav>
            <a className="hamburger" href="/"><i className="fa fa-bars"></i></a>
		<ul>
			<li><a href="#about">About</a></li>
			<li><a href="#gallery">Gallery</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
</div>
        )
    }
}

export default Header;
