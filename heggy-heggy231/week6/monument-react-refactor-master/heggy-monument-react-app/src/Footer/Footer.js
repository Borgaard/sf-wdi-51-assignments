import React from 'react';
// now I created Footer.css include its style
import './Footer.css'
// for social icon in footer I need to: 
// npm install react-social-icons --save-dev
// https://www.npmjs.com/package/react-social-icons


// class should fit to Footer component! rename
class Footer extends Component {
  render () {
    return (
      <footer>
        <div className="wrap">
          <div className="social-links">
            <SocialIcon className="instagram" url="http://instagram.com" />
            <SocialIcon className="twitter" url="http://twitter.com/jaketrent" />
            <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
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