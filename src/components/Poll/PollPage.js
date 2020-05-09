import React, { Component } from "react";
import PollContainer, { POLL ,RESULT} from "./PollContainer";
import { connect } from "react-redux";

class PollPage extends Component {
  render() {
    return (
        this.props.isAnswered ? ( <PollContainer content={RESULT} id={this.props.id} />)
        : (<PollContainer content={POLL} id={this.props.id} />)
    );
  }
}
function mapStateToProps({ authedUser,users}, props) {
  const {id}=props.match.params
  const isAnswered= typeof(users[authedUser].answers[id])==="string"
  console.log(isAnswered)
  return {id,isAnswered}
}
export default connect(mapStateToProps)(PollPage);