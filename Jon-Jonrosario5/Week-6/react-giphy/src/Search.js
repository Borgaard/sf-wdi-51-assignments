import React, {Component} from 'react';

const Search = (props) => {
    
        return(
            <div>
                 <form
                    onSubmit={props.submit}
                    >
                    <label>
                        <input 
                            type="text" 
                            name="search"
                            onChange={props.change}
                        />
                    </label>
                    <input 
                        type="submit" 
                        value="Search"
                        />
                </form>
            </div>
        )
}

export default Search;