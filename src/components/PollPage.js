import React, { Component } from "react";
import PollContainer, { POLL } from "./PollContainer";

export default class PollPage extends Component {
  render() {
    const { id } = this.props.match.params
    return (
        <PollContainer content={POLL} id={id} />
    );
  }
}
