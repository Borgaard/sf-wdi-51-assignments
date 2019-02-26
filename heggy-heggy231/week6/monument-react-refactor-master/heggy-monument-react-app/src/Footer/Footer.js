import React, { Component } from 'react';
// now I created Footer.css include its style
import './Footer.css';
// for social icon in footer I need to: 
// npm install react-social-icons --save-dev
// https://www.npmjs.com/package/react-social-icons
import { SocialIcon } from 'react-social-icons';



// class should fit to Footer component! rename
class Footer extends Component {
  render () {
    // remember inside of return it is JSX rename it to className = class
    return (
      <footer>
        <div className="wrap">
          <div className="social-links">
            <SocialIcon className="instagram" url="http://instagram.com" />
            <SocialIcon className="twitter" url="http://twitter.com/jaketrent" />
            <SocialIcon className="facebook" url="http://facebook.com" />
          </div>
          <div className="footerdiv">
            <input type="text" placeholder="Email Address"/>
            <button type="submit">Keep in Touch</button>
          </div>
        </div>
        <p className="copyright">&copy;2016 Sarah Holden</p>
      </footer>
    )
  }
}

{/* make the footer public */}
export default Footer;