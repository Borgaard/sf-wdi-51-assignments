import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'
import axios from 'axios'
class SearchContainer extends Component {
    state = {
        query: '',
        response: []
    }
    search = () => {axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                q: this.state.query,
                api_key: 'jLRvlnP8XNkx7nW7LIDVjWC8giYe9Yzw',
                limit: 3
            }
        })
        .then((response) => {
            this.setState({
                response: response.data.data
            })
            // console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    shouldComponentUpdate= (nextProps, nextState) => {
        if (this.state.response === 0 && this.state.query === nextState.query) {
            return false
        }
        return true
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.query !== this.state.query) {
            this.search()
        }
    }
    searched = (event) => {
        event.preventDefault()
        console.log('searched')
    }
    onInput = (event) => {
        this.setState({
            query: event.target.value
        })
        console.log(this.state.query)
        // console.log(event.target.value)
    }
    render() {
        let results;
        let gifResults = this.state.response;
        if (gifResults) {
            results = gifResults.map((images) => {
                console.log(images)
                // debugger;
                 return (
                    <Results images={images} key={images.id} />
                 )
            });
        }
        return (
            <div>
                <Search onInput={this.onInput}/>
                {results}
                {/* <Results images={this.response[0].images.fixed_height} /> */}
            </div>
        )
    }
}
export default SearchContainer