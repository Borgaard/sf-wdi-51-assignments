import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    let images = [];

    for (let i = 0; i < this.props.data.length; i++) {
      images.push(<img key={i} src={this.props.data[i]} role="presentation" />);
    }

    console.log(images);
    return (
      <div>
        {images}
        {/* <img key="0" src="https://asdf.asdf/asdf" />
                <img key="1" src="https://asdf.asdf/zxcv" /> */}
      </div>
    );
  }
}

export default Results;
