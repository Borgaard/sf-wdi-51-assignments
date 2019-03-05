import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'
// npm install react-social-icons --save-dev
// https://www.npmjs.com/package/react-social-icons

const footer = () => {
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

export default footer;