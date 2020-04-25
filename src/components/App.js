import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveUsers } from "../actions/users";
import {
  handleReceivePolls,
  handleCreatePoll,
  handleAnswerPoll,
} from "../actions/polls";
import { setAuthedUser } from "../actions/authedUser";
import {getLeaderBoardUIModel, getPollStatsUIModel} from "./ui_mappers"
class App extends Component {
  constructor() {
    super();
    this.pollSize = 0;
  }
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceivePolls());
    this.props.dispatch(setAuthedUser("tylermcginnis"));
  }
  componentDidUpdate() {
    console.group("componentDidMount");
    this.pollSize = this.props.polls.length;
    console.groupEnd();
  }

  handlePollSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      handleCreatePoll(this.optionOne.value, this.optionTwo.value)
    );
    //console.log(`answer ${this.answer.value} pollID ${this.pollID.value}`)
  };
  handleAnswerSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(handleAnswerPoll(this.pollID.value, this.answer.value));
  };
  showLeaderBoard = (event) => {
    event.preventDefault();
    console.group("Leader Board");
    console.log(getLeaderBoardUIModel(this.props.users))
    console.groupEnd();
  };
  showPollStats=(event) =>{
    event.preventDefault();
    console.group("Poll Stats");
    console.log(getPollStatsUIModel(this.props.polls["8xf0y6ziyjabvozdd253nd"],this.props.authedUser))
    console.groupEnd();
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handlePollSubmit}>
            <label>
              Option One:
              <input
                type="text"
                name="optionOne"
                ref={(input) => (this.optionOne = input)}
              />
            </label>
            <label>
              Option Two:
              <input
                type="text"
                name="optionTwo"
                ref={(input) => (this.optionTwo = input)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <form onSubmit={this.handleAnswerSubmit}>
            <label>
              POLL ID:
              <input
                type="text"
                name="pollID"
                ref={(input) => (this.pollID = input)}
              />
            </label>
            <label>
              ANSWER:
              <input
                type="text"
                name="answer"
                ref={(input) => (this.answer = input)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <button onClick={this.showLeaderBoard}>Show Leaders</button>
        <button onClick={this.showPollStats}>Show Poll Stats</button>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(App);
