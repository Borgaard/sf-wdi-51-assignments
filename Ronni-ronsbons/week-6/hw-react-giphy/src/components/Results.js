import React, { Component } from 'react';

let gifJson = {
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
};

class Results extends Component {
  render() {
    console.log(this.props.gif);
    return (
      <div className="gif-result">
        <img src={this.props.gif.images.fixed_height.url} alt={this.props.gif.title} />
        <p>Source: {this.props.gif.source_tld}</p>
        {/* <img src={gifJson.data[0].images.fixed_height.url} alt="cat pulling out a drawer" />
        <p>Source: {gifJson.data[0].source}</p> */}
      </div>
    );
  };
}

export default Results;
