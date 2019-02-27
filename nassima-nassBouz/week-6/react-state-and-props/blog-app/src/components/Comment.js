import React, {Component} from 'react'

class Comment extends Component {
  state = {
    karma: 'good',
    message: this.props.message
  };
  //  we can use this lin of code changeKarma = this.changeKarma.bind(this);
  // then declare the changeKarma this way: changeKarma(){    
  // (it doesnt know what is this so )
changeKarma = () =>{
    if (this.state.karma === 'good'){
      this.setState({
        karma: 'bad',
        message: 'Romoved' 
      })
    } else {
      this.setState({
        karma: 'good'
      })
    }
  }

   render () {
    return (
      <div className={this.state.karma}>
        <p>{this.state.message}</p>
        <button className={"button"} onClick={this.changeKarma}>Change Karma</button>
      </div>

    )
  }
}

export default Comment