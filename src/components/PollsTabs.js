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
      this.setState({ content })
      console.log('tab clicked')
    };

  render() {
    return (
      <div className="tab">
        <button className="tablinks" onClick={()=>this.updateContent(NOT_ANSWERED)}>
          Unanswered Questions
        </button>
        <button className="tablinks" onClick={()=>this.updateContent(ANSWERED)}>
          Answered Questions
        </button>
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
  const answeredPolls = Object.keys(users[authedUser].answers).map(
    (id) => polls[id]
  );
  const notAnsweredPolls = objectToArray(polls).filter(
    (poll) => !answeredPolls.includes(poll)
  );
  return { notAnsweredPolls, answeredPolls };
}
export default connect(mapStateToProps)(PollsTabs);
