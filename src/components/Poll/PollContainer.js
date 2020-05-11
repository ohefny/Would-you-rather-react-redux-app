import React, { Component } from "react";
import { connect } from "react-redux";
import PollContent from "./PollContent";
import PollPreview from "./PollPreview";
import PollStats from "./PollStats";
import UserCard from "../UserCard"
import { objectToArray } from "../ui_mappers";
class PollContainer extends Component {
  render() {
    return (
      <div className="pollContainer">
        <UserCard name={this.props.name} avatarURL={this.props.avatarURL}/>
        {this.getContent()}
      </div>
    );
  }
  getContent = () => {
    switch (this.props.content) {
      case RESULT:
        return <PollStats id={this.props.id} />;
      case PREVIEW:
        return <PollPreview id={this.props.id} />;
      default:
        return <PollContent id={this.props.id} />;
    }
  };
  

  UserCard() {
    return <div className="author">
      <img src={this.props.avatarURL} alt={`Avatar of ${this.props.name}`} className="avatar" />
      <h5>{this.getHeaderText()}</h5>
    </div>;
  }
}
function mapStateToProps({ users }, { id }) {
  const { name, avatarURL } = objectToArray(users).find((user) =>
    user.questions.includes(id)
  );
  return { name, avatarURL, id };
}
export const RESULT = "result";
export const POLL = "content";
export const PREVIEW = "preview";

export default connect(mapStateToProps)(PollContainer);
