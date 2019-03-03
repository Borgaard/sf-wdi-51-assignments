import React, { Component } from 'react';
import Search from './search';
import Results from './results';
import axios from 'axios';
import { throws } from 'assert';

class SearchContainer extends Component {
    state = {
        Query:"",
        response:[]
    }
    handleSubmit = (event) => {
    event.preventDefault();
    // making AJAX call to giphy database using the necessary requirements per the website instructions 
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.Query}&api_key=55wBK7VLZy5IoUOK0dFBERd0vHRdaN8A`)
        .then((res) => {    
            this.setState({
                response: res.data.data,  // once the giphy data is received, updating the state of the empty response array to the giphy search data
                Query: "" // reseting the state of Query to an empty string for UI improvements
            });
        })
    
    let QueryTerm =this.state.Query; 
    console.info(`A new Query was submitted:${QueryTerm}`) // logging the user's search term input in the console 
   
}
     handleChange =(event) => {
    console.log('Your Query Term has changed!:' + event.target.value); // logging the Query term the user types in
    this.setState({Query: event.target.value}); //dynamically  setting the state of the user's Query to whatever they are typing in the input
};
    
    render() {

        let gifresults;
        if(this.state.response){ 
            gifresults = this.state.response.map((dataResults) => {
            //setting the gifresults var to equal to the gif data sent back from the API and mapping over that array
                return (
                    <section>
                        <div>
                            <Results
                                result={dataResults} // passing the dataResults , which is the user's query results as parameters to be used in the Results Component 
                                key={dataResults.id}
                            />
                        </div>
                    </section>
                )
            })
        }

        return( <div> 
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}  query={this.QueryTerm} results={this.gifresults} />
            {gifresults}
            </div>
        )
    }
}

export default SearchContainer;
