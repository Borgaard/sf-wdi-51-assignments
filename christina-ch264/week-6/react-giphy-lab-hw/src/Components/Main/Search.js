import React from 'react';


// class Search extends Component {


    // state = {
    //     query: ''
    // }

    // handleInput = (e) => {
    //     e.preventDefault();
    //     console.log("Submit")
    // }

    // handleChange = (e) => {
    //     console.log('searched!');
    //     this.setState({query: e.target.value})
        
    // }

const search = (props) => {

    // render (props) {
        // console.log(this.state);
        return (
                <div>
                    {/* <form onSubmit={ this.handleInput }> */}
                        {/* <input type="text" name="message" value ={ this.props.query } onChange={this.props.handleChange}/>  */}
                        {/* <input type="submit" value="search" /> */}
                    {/* </form> */}

                    <input type="text" placeholder="Search here" onKeyUp={props.handleChange}/>
                </div>
        )
    // }
}

export default search;