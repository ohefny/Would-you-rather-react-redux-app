import React, { Component } from "react";
import UserCard from "./UserCard";
import { Table } from "react-bootstrap/";

export default class Leader extends Component {
  render() {
    return (
      <div className="leaderContainer">
        <UserCard name={this.props.leader.name} avatarURL={this.props.leader.avatarURL} />
        {this.getContent()}
      </div>
    );
  }

  getContent = () => {
    const { answersCount, questionsCount, score } = this.props.leader;

    return (
      <Table striped bordered hover size="sm" variant="light">
        <tbody>
          <tr>
            <td>Rank</td>
            <td>#{this.props.rank}</td>
          </tr>
          <tr>
            <td>Answered Polls</td>
            <td>{answersCount}</td>
          </tr>
          <tr>
            <td>Created Polls</td>
            <td>{questionsCount}</td>
          </tr>
          <tr>
            <td>Score</td>
            <td>{score}</td>
          </tr>
        </tbody>
      </Table>
    );
  };
}
