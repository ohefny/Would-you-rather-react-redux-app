import React, { Component } from "react";
import PollsList from './PollsList'
export default class PollsTabs extends Component {
  render() {
    return (
      <div>
        <div>
          <button>Unanswered Questions</button>
          <button>Answered Questions</button>
        </div>
        <PollsList polls={this.state.polls} />
      </div>
    );
  }
}
