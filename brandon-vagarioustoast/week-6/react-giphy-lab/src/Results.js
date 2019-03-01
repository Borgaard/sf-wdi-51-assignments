import React, { Component } from "react";

export class Results extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.result.title}</h3>
        <img
          src={this.props.result.images.fixed_height.url}
          alt={this.props.result.title}
        />
      </div>
    );
  }
}
