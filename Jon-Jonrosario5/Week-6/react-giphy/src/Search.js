import React, {Component} from 'react';

const Search = (props) => {
   
        return(
            <div>
                 <form>
                    <label>
                        <input 
                        type="text" 
                        name="search"
                        />
                    </label>
                    <input 
                        type="submit" 
                        value = "Search"
                        onSubmit ={props.change}
                        />
                </form>
            </div>
        )
}

export default Search;