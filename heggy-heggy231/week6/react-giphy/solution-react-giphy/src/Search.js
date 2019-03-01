import React from 'react';

const search = (props) => {
    return(
        <div>
            <input 
                type="text" 
                placeholder="Search here"
                onKeyUp={props.onInput}
            />
        </div>
    )
}

export default search;