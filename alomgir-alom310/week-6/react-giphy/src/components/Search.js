import React from 'react';
import '../App.css';

const search = (props) => {
    return(
        <div className='search'>
            <input type="text" placeholder="Search" onKeyUp={props.onInput}/>
        </div>
    )
}

export default search;