import React, { Component } from "react";
import PollsList from "./PollsList";
import { connect } from "react-redux";
import { objectToArray } from "./ui_mappers";
import { Tabs, Tab } from "react-bootstrap/";
class PollsTabs extends Component {
  updateContent = (content) => {
    this.setState({ content });
  };

  render() {
    return (
      <div className="tabsContainer">
        <Tabs
          className="tabs d-flex justify-content-center"
          defaultActiveKey="unanswered"
          transition={false}
          id="polls_tabs"
        >
          <Tab eventKey="unanswered" title="UnAnswered">
            <PollsList polls={this.props.answeredPolls} />
          </Tab>
          <Tab eventKey="answered" title="Answered">
            <PollsList polls={this.props.notAnsweredPolls} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
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
