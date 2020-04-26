import React, { Component } from "react";
import PollsList from "./PollsList";
import { connect } from "react-redux";
import { objectToArray } from "./ui_mappers";
class PollsTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { content: NOT_ANSWERED };
  }
  updateContent = (content) => {
    this.setState({ content });
  };

  render() {
    return (
      <div className="tabsContainer">
        <div className="tabs">
          <span
            style={
              this.state.content === NOT_ANSWERED
                ? { fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            className="tablinks"
            onClick={(e) => {
              e.preventDefault();
              this.updateContent(NOT_ANSWERED);
            }}>
            Unanswered Questions
          </span>
          <span
            style={
              this.state.content === ANSWERED
                ? { fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            className="tablinks"
            onClick={(e) => {
              e.preventDefault();
              this.updateContent(ANSWERED);
            }}>
            Answered Questions
          </span>
        </div>
        <PollsList
          polls={
            this.state.content === ANSWERED
              ? this.props.answeredPolls
              : this.props.notAnsweredPolls
          }
        />
      </div>
    );
  }
}
const ANSWERED = 0;
const NOT_ANSWERED = 1;
function mapStateToProps({ authedUser, users, polls }) {
  //const myPolls = users[authedUser].questions;
  const answeredPolls = Object.keys(users[authedUser].answers).map(
    (id) => polls[id]
  );
  const notAnsweredPolls = objectToArray(polls).filter(
    (poll) => !answeredPolls.includes(poll) // && !myPolls.includes(poll.id)
  );
  return { notAnsweredPolls, answeredPolls };
}
export default connect(mapStateToProps)(PollsTabs);
