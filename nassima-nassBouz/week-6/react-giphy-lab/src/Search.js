import React, { Component } from 'react';

class Search extends Component {
    state = {
        query: '',
    };
    handleSubmit = (event) =>{
        //alert("testing submit button");
        event.preventDefault();
        console.log("searche!")
        this.setState({query :this.search.value});
        console.log(this.state.query)


    }
    handleChange = (event) => {
        //console.log(searched)
        event.preventDefault();
        this.setState({query :this.search.value});
        //console.log(query)
    }
    // render() {
    //     return (
        // <div>
        //     {/* <form onSubmit={this.handleSubmit}> */}
        //       <form >
        //         <label htmlFor="Search">
        //             Search:
        //             {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        //             <input type="text" name="search" onChange={ this.handleChange } />
        //         </label>
        //         <input type="submit" value="Submit" />
        //     </form>
        // </div>
        // )
        render() {
            return (
               <form onSubmit={this.handleSubmit}> 
                <input
                  placeholder="Search for..."
                  ref={input => this.search = input}
                  onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
                <p>{this.state.query}</p>
              </form>
        )
    }
}

export default Search





