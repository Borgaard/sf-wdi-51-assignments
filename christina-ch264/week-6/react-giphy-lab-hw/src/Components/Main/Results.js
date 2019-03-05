// take in a collection of gif objects and render each one's source url as well as a fixed height image

import React from 'react';


const results = (props) => {
    // render () {
        return (
            <section className="result">
                <div>
                    <p>{props.result.embed_url}</p>
                    <img src={props.result.images.fixed_height.url}/>
                </div>
            </section>
        )
    // }
}

export default results;