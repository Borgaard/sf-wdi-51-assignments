import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <section className="comment">
                <div className="wrap">
                <h2>Leave a Comment</h2>
                    <form>
                        <input type="text" placeholder="Name" className="col-half" />
                        <input type="email" placeholder="Email" className="col-half" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        )
    }
};

export default Contact;