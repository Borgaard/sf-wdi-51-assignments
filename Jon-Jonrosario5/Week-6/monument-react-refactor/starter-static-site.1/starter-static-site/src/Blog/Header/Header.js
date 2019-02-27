import React, {Component} from 'react';
import ("./Header.css");

class Header extends Component{
    render(){
        return (
            <header class="vertical-center">
            <div>
                <h1><a href="http://localhost:3000/">Monument</a></h1>
            </div>
        </header>
        )
    }
}

export default Header;