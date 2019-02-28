import React, { Component } from 'react';   
// rename to NavBar
class NavBar extends Component {
  render () {
    return (
      <nav>
        <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
        <ul>
          {/* this part is for later react Router */}
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#gallery">Gallery</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

// export it whereever I am importing to 
// making it public
export default NavBar;