import React, {Component} from 'react'

class Comment extends Component {
  state = {
    karma: 'good',
    message: this.props.message
  };
  //  we can use this lin of code changeKarma = this.changeKarma.bind(this);
  // then declare the changeKarma this way: changeKarma(){    
changeKarma = () =>{
    if (this.state.karma === 'good'){
      this.setState({
        karma: 'bad',
        message: 'Romoved' 
      })
    } else {
      this.setState({
        karma: 'good',
        //I added this line to get the message back when changing the karma to good
        message: this.props.message
      })
    }
  }

   render () {
    return (
      // this class className={this.state.karma} is to change the styling of the comment acoording to its karma(good/bad)
      <div className={this.state.karma}>
        <p>{this.state.message}</p>
        <button className={"button"} onClick={this.changeKarma}>Change Karma</button>
      </div>

    )
  }
}

export default Comment