import React, { Component } from 'react';

import './css/style.css';
import './css/landing.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrap">
          <div className="social-links">
            <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
          <input type="text" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
		    </div>

        <p className="copyright">&copy;2019 Joe Baker</p>
	    </footer>
    );
  }
}

export default Footer;
