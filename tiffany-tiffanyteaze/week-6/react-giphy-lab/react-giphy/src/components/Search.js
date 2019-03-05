import React, {Component} from 'react'
class Search extends Component {
    render() {
        return (
            <form>
                <label>Search: </label>
                <input type='text' placeholder='Search' onInput={this.props.onInput}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Search