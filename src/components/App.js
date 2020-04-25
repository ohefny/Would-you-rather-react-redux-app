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
    this.props.dispatch(handleCreatePoll(this.optionOne.value,this.optionTwo.value))
    //console.log(`answer ${this.answer.value} pollID ${this.pollID.value}`)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <label>
            Option One:
            <input type="text" name="optionOne" ref={(input) => this.optionOne = input} />
          </label>
          <label>
            Option Two:
            <input type="text" name="optionTwo" ref={(input) => this.optionTwo = input} />
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
