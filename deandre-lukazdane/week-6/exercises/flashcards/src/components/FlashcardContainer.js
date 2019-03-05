import React, { Component } from "react";
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";
import axios from "axios";

class FlashcardContainer extends Component {
  state = {
    flashcards: [],
    currentIndex: 0
  };

  next = () => {
    this.setState({
      //add if statement to prevernt out of bounds
      currentIndex: this.state.currentIndex + 1
    });
  };
  prev = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1
    });
  };

  handleKeyup = event => {
    if (event.keyCode === 39) {
      console.log(event.keyCode);
      this.next();
    }
    if (event.keyCode === 37) {
      console.log(event.keyCode);
      this.prev();
    }
  };

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyup);
    axios
      .get(CLIENT_URL)
      .then(response =>
        this.setState({
          flashcards: response.data
        })
      )
      .catch(error => console.log(error));
  }
  render() {
    let flashcard = this.state.flashcards
      ? this.state.flashcards[this.state.currentIndex]
      : null;
    return (
      <div>{flashcard && <Flashcard detail={this.state.flashcards[0]} />}</div>
    );
  }
}

export default FlashcardContainer;
