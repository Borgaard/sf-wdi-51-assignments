import React, {Component} from 'react';


class Search extends Component {

    state = {
        query: ''
    }

    handleInput = (e) => {
        e.preventDefault();
        console.log("Submit")
    }

    handleChange = (e) => {
        console.log('searched!');
        this.setState({query: e.target.value})
        
    }
    

    render () {
        console.log(this.state);
        return (
            <section>
                <div>
                    {/* <form onSubmit={ this.handleSubmit }> */}
                    <form onSubmit={ this.handleInput }>
                    <label htmlFor="search">
                        {/* starting value is current state on pageload, in our case an empty string so that user can adds comment to page. 
                        On change we capture the value and call the handlechange function to modify the new comment value */}
                        {/* <input type="text" name="message" value ={ this.state.newCommentValue } onChange={this.handleChange}/> */}
                        <input type="text" name="message" value ={ this.state.query } onChange={this.handleChange}/> 
                    </label>
                    <input type="submit" value="submit" />
                </form>
                </div>
            </section>
        )
    }
}

export default Search;