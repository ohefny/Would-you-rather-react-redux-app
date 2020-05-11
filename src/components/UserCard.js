import React, { Component } from "react";
export default class UserCard extends Component {
  render() {
    return (
      <div className="author">
        <img
          src={this.props.avatarURL}
          alt={`Avatar of ${this.props.name}`}
          className="avatar"
        />
        <h5>{this.props.name}</h5>
      </div>
    );
  }
}
