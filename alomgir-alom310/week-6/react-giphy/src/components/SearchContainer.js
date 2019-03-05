import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

class SearchContainer extends Component {
    state = {
        query:'',
        response:[]
    }
    // 'jLRvlnP8XNkx7nW7LIDVjWC8giYe9Yzw'
    
    search = () => {
        axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                api_key:'YWJ8VV3duRyt2wHRhZg46c8hTvx2fOrb',
                q:this.state.query
            }
        })
        .then((res) => {
            this.setState({
                response: res.data.data
            });
        })
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(this.state.response.length === 0 &&
            this.state.query === nextState.query){
            return false;
        }
        return true;
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.query !== this.state.query){
            this.search();
        }
    }

    onInput = (event) => {
        this.setState({
            query:event.target.value
        })
    }

    render(){
        let results;
        if(this.state.response){
            results = this.state.response.map((result) => {
                return (
                    <section>
                        <div>
                            <Results
                                result={result}
                                key={result.id}
                            />
                        </div>
                    </section>
                )
            })
        }
        return(
            <div>
                <Search onInput={this.onInput}/>
                {results}
            </div>
        )
    }
}

export default SearchContainer;