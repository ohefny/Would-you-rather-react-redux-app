import NoPollsAvailable from "./Poll/NoPollsAvailable";
import React, { Component } from "react";
import PollContainer, { PREVIEW } from "./Poll/PollContainer";
//doesn't need accessing the store it only needs to render the list
export default class PollsList extends Component {
  render() {
    if (this.props.polls.length > 0) {
      return (
        <ul className="dashboard-list">
          {this.props.polls.map((poll) => (
            <li key={poll.id}>
              <PollContainer id={poll.id} content={PREVIEW} />
            </li> //todo make proper mapping
          ))}
        </ul>
      );
    } else {
      return <NoPollsAvailable />;
    }
  }
}
