import React, { Component } from 'react';
import Results from './results';
import axios from 'axios';
    
const Search = (props) => {
    return (
        <div> 
        <form onSubmit={props.handleSubmit} className="form-inline"> 
         <label>Search Gifs</label>
         <input type="text" className="form-control gif-input" name="q" value={props.query} onChange = {props.handleChange}  placeholder="search gifs"/>
         <input type="submit" value="Go!" className="btn btn-primary"/>
        </form>
        </div>
    )
}
export default Search;