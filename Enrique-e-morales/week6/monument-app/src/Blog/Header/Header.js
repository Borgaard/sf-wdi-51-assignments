import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
        <div>
            <header className="vertical-center1">
		        <div>
			        <h1><a href="http://localhost:3000/">Blog</a></h1>
		        </div>
	        </header>
        </div>

        );
    }
}

export default Header;