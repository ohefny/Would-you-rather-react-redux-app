import React, { Component } from "react";
import { connect } from "react-redux";
import PollContent from "./PollContent"
class PollContainer extends Component {
  render() {
    return (
      <div>
        <h1>{this.getHeaderText()}</h1>
        <img
          src={this.props.avatar}
          alt={`Avatar of ${this.props.name}`}
          className="avatar"
        />
        {this.getContent()}
      </div>
    );
  }
  getContent = () => {
    switch (this.props.content) {
      case RESULT:
        return <PollResults id={this.props.id}/>; //don't pass the poll rather navigate to it using the router
      case PREVIEW:
        return <PollPreview id={this.props.id}/>;
      default:
        return <PollContent id={this.props.id}/>;
    }
  };
  getHeaderText = () => {
    if (this.props.content === RESULT) return `Asked by ${this.props.name}`;
    else return `${this.props.name} asks:`;
  };
}
function mapStateToProps({ name, avatarURL },{id}) {
  return { name, avatarURL,id };
}
export const RESULT = "result";
export const POLL = "content";
export const PREVIEW = "preview";

export default connect(mapStateToProps)(PollContainer);
