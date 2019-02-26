import React, { Component } from 'react';
import Article from './Article';


class Archive extends Component {
    render() {
        return (
            <section>
                <h2>From the Archive</h2>
                <Article />
            </section>
        )
    }
}

export default Archive;