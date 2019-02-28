import React from 'react'
import GiphyListItem from './GiphyListItem'

const GiphyList = ({gifs}) => {
  const gifList = gifs.map((gif, i) =>
    <div className="column" key={i}>
      <div className="ui one column grid">
        <GiphyListItem gif={gif} key={gif.id} />
      </div>
    </div>
  )

  return (
    <div className="ui column centered grid">
      <div className="sixteen wide column">
        <div className="ui six column grid">
          {gifList}
        </div>
      </div>
    </div>
  )
}

export default GiphyList
