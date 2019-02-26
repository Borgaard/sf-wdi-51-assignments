import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'
//ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body);
class Footer extends Component {
    render(){
        return (
            <footer>
                    <div className="wrap">
                        <div className="social-links">
                            <SocialIcon className="instagram" url="http://instagram.com" />
                            <SocialIcon className="twitter" url="http://twitter.com/jaketrent" />
                            <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                        </div>
                        <input type="text" placeholder="Email Address"/>
                        <button type="submit">Subscribe</button>
                    </div>
                <p className="copyright">&copy;2016 Sarah Holden</p>
           </footer>
        )
        }
    }

export default Footer;

//return (
//     <footer>
//     <div className="wrap">
//         <div className="social-links">
//             <SocialIcon className="instagram" url="http://instagram.com" />
//             <SocialIcon className="twitter" url="http://twitter.com/jaketrent" />
//             <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
//         </div>
//         <div className="footerdiv">
//             <input type="text" placeholder="Email Address"/>
//             <button type="submit">Keep in Touch</button>
//         </div>
//     </div>

//     <p className="copyright">&copy;2016 Sarah Holden</p>
// </footer>
// )