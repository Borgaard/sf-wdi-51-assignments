import React,{Component} from 'react';
import axios from 'axios';
import Search from "./Search";
import Results from "./Results";
// import giphy_Url from "./Constant";
// import apiKey from "./Constant";

class SearchContainer extends Component {
    state = {
        query: "",
        results: []
    }

    gifSearch = () => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=kEGNZiTWnJQmAKRt0yqHM8c0dznWWL1M`)
        .then(res => this.setState({
            results: res.data.data
        }))
        .catch(error => console.log(error))
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(this.state.results.length === 0 &&
           this.state.query === nextState){
            return false;
           }
            return true;
    }

    


    handleChange = (event) => {
        console.log("changes", event.target.value)
        this.setState({
            query: event.target.value
        })
        console.log(this.state.query)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.gifSearch();
    }

    render(){
        let gifResults;
        if(this.state.results){
            gifResults = this.state.results.map((gifResult) =>{
                return (
                    <div className = "giphyBoxes">
                        <Results gifResult ={gifResult} 
                                 key={gifResult.id}   
                        /> 
                    </div>
                )
        })
            
        }
        return (
            <div>
                <Search 
                    change={this.handleChange}
                    query={this.state.query}
                    submit={this.handleSubmit}
                />
                {gifResults}
                
            </div>
        )
    }
}

export default SearchContainer;