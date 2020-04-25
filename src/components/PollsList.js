import React, { Component } from "react";
import PollContainer,{PREVIEW} from './PollContainer'
//doesn't need accessing the store it only needs to render the list
export default class PollsList extends Component {
  render() {
    return (
      <ul>
        {this.props.polls.map((poll) => (
          <li><PollContainer id={poll.id} content={PREVIEW}/></li> //todo make proper mapping
        ))}
      </ul>
    );
  }
}
