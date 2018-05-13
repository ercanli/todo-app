import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  render() {
    return (
      <header className="Title">
        <h1 className="Title-text">{this.props.text}</h1>
      </header>
    );
  }
}

export default Title;
