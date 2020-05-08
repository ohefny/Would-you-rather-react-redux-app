import React,{ Component } from "react";
import { connect } from "react-redux";

class PollContent extends Component {

    render(){
        return <div></div>
    }
}

function mapStateToProps({ authedUser, polls }, { id }) {
  const { optionOne, optionTwo } = polls[id];
  return {
    authedUser,
    id,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
  };
}
export default connect(mapStateToProps)(PollContent);
