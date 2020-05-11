import React, { Component } from "react";
import PollContainer, { POLL, RESULT } from "./PollContainer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class PollPage extends Component {
  render() {
    if (this.props.validID) {
      return this.props.isAnswered ? (
        <PollContainer content={RESULT} id={this.props.id} />
      ) : (
        <PollContainer content={POLL} id={this.props.id} />
      );
    } else return <Redirect to="/not_valid_id" />;
  }
}
function mapStateToProps({ authedUser, users, polls }, props) {
  const { id } = props.match.params;
  const isAnswered = typeof users[authedUser].answers[id] === "string";
  console.log(id,polls[id])
  const validID = !(typeof polls[id] === "undefined");
  console.log(isAnswered);
  return { id, isAnswered, validID };
}
export default connect(mapStateToProps)(PollPage);
