import React from 'react'

const GiphyListItem = ({gif}) => {
  const gifImageInfo = gif.images.fixed_height_small
  return (
    <div className="ui segment">
      <img src={gifImageInfo.url} alt={gifImageInfo.slug} height={gifImageInfo.height} width="125"></img>
    </div>
  )
}

export default GiphyListItem
