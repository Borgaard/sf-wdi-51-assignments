import React, {Component} from 'react';
class Results extends Component {
    render () {
        return (
            <div>
                <img src={this.props.images.images.fixed_height.url} alt="gif"/>
            </div>
        )
    }
}
export default Results