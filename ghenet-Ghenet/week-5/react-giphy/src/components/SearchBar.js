import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchBarChange(searchTerm) {
    this.setState({ searchTerm })
    this.props.onChange(searchTerm)
  }

  render() {
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input
              type="text"
              placeholder="Search all the GIFs..."
              value={this.state.searchTerm}
              onChange={(ev) => this.handleSearchBarChange(ev.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
