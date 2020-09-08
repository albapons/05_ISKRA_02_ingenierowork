import React, { Component } from "react";
import "../../App.css";

export default class socialMediaButtons extends Component {
  render() {
    return (
      <div className="blue">
        <i className="fab fa-twitter fa-2x mr-2 socialMediaDesktop" />
        <i className="fab fa-linkedin-in fa-2x ml-2 socialMediaDesktop" />
      </div>
    );
  }
}
