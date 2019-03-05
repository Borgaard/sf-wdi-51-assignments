import React from 'react';

const Results = (props) => {
    return (
            <div>
                <img src={props.gifResult.images.fixed_height.url}/>
                <p>
                    {props.gifResult.embed_url}
                </p>
            
            </div>
    )
}

export default Results;