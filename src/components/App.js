import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveUsers } from "../actions/users";
import { handleReceivePolls, handleCreatePoll, handleAnswerPoll } from "../actions/polls";
import { setAuthedUser } from "../actions/authedUser";

class App extends Component {
  constructor(){
    super()
    this.answer="1"
    this.pollID="1"
  }
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceivePolls());
    this.props.dispatch(setAuthedUser("sarahedo"));
  }
  componentDidUpdate() {
    console.group("componentDidMount");
    console.log(this.props.polls);
    console.groupEnd();
  }
  handleSubmit=(event)=> {
    event.preventDefault();
    console.log(this)
    this.props.dispatch(handleAnswerPoll(this.pollID.value,this.answer.value))
    //console.log(`answer ${this.answer.value} pollID ${this.pollID.value}`)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <label>
            Answer:
            <input type="text" name="question" ref={(input) => this.answer = input} />
          </label>
          <label>
            Poll:
            <input type="text" name="poll" ref={(input) => this.pollID = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(App);
