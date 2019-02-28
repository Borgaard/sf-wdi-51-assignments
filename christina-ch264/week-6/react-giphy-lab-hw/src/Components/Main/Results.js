// take in a collection of gif objects and render each one's source url as well as a fixed height image

import React, {Component} from 'react';


const results = (props) => {
    // render () {
        return (
            <section>
                <div>
                    <p>{props.results.data.embed_url}</p>
                    <img src={props.results.data.images.fixed_height}/>
                </div>
            </section>
        )
    // }
}

export default results;