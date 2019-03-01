import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/todos'}>Todos</Link>
        </nav>
      </div>
    )
  }
}
export default Header