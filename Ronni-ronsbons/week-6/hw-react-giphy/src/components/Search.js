import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          {/* value={this.props.value} doesn't show input like it did in blog-app */} 
          <input type="text" name="search" placeholder={this.props.value} onInput={this.props.input} />
          <input type="submit" name="submit" value="Search" />
        </form>
      </div>
    );
  };
}

export default Search;
