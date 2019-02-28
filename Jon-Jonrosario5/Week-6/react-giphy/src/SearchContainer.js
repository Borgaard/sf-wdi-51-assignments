import React,{Component} from 'react';
import Search from "./Search";

class SearchContainer extends Component {
        state = {
            query: "Yellow"
        }
    
    
        handleChange = (event) => {
            event.preventDefault();
            console.log("changes")
            this.setState({
                query: event.target.value
            })
            console.log(this.state.query)
        }

    render(){
        return (
            <div>
                < Search 
                change = {this.handleChange()}
                query = {this.state.query}
                />
            </div>
        )
    }
}