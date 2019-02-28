import React, { Component } from 'react';



class ArchiveTitle extends Component {
    render() {
      return (
        
        <article className="col-third">
            <img src={this.props.src} alt=""/>
            <div>
                <h3> {this.props.title}</h3>
                <p>{this.props.text}</p>
                <button>Read More</button>
            </div>
        </article>
      );
    }
  }


  export default ArchiveTitle;


  