import React, { Component } from 'react';
import './Header.css';
import NavBar from '../../NavBar/NavBar.js';

class Header extends Component {
    render() {
        return (
            <div>
                <header class="vertical-center">
                    <div>
                        <h1><a href="index.html">Monument</a></h1>
                    </div>
                </header>
                <NavBar />
            </div>
        )
    }
}

export default Header