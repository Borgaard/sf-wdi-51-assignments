import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          {/* value={this.props.value} doesn't show input like it did in blog-app */} 
          {/* changed from onInput to onKeyUp to trigger live search */}
          <input type="text" name="search" placeholder="Find GIFs" value={this.props.value} onKeyUp={this.props.input} />
          <input type="submit" name="submit" value="Search" />
        </form>
      </div>
    );
  };
}

export default Search;
