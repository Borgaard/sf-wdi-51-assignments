import React from 'react';
import './Contact.css'

const contact = () => {
    return (
        <section id="contact">
		    <div class="wrap">
		        <h2>Get in Touch</h2>
			    <form class="contact">
                    <input type="text" placeholder="Full Name" class="col-third" />
                    <input type="email" placeholder="Email" class="col-third" />
                    <input type="text" placeholder="Subject" class="col-third" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
			    </form>
		    </div>
	    </section>
    )
}

export default contact;