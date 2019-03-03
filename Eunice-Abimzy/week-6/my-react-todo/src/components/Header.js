import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <nav>
            <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/todos'}>Todos</Link></li>
            </ul>
        </nav>
      </div>
    )
  }
}
export default Header