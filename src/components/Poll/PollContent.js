import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap/";
import { handleAnswerPoll } from "../../actions/polls";
import { showLoading, hideLoading } from "react-redux-loading";
class PollContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedOption: 1,
    };
  }
  onSubmitClicked = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const optionID = this.state.checkedOption === 1 ? "optionOne" : "optionTwo";
    dispatch(showLoading());
    dispatch(handleAnswerPoll(id, optionID));
    setTimeout(() => {
      dispatch(hideLoading())
    }, 1000);
  };
  onChoiceChanged = (e, option) => {
    this.setState({ checkedOption: option });
  };
  render() {
    return (
      <div className="pollContent">
        <Form key="optionOne" className="mb-3">
          <Form.Label style={{ fontSize: "22px", fontWeight: "700" }}>
            Would You Rather ...
          </Form.Label>
          <Form.Check
            checked={this.state.checkedOption === 1}
            onChange={(e) => this.onChoiceChanged(e, 1)}
            type="radio"
            id="optionOne"
            label={this.props.optionOneText}
          />
          <Form.Check
            checked={this.state.checkedOption === 2}
            onChange={(e) => this.onChoiceChanged(e, 2)}
            type="radio"
            label={this.props.optionTwoText}
            id="optionTwo"
          />
          <Button
            onClick={this.onSubmitClicked}
            variant="info"
            type="submit"
            style={{ height: "40px" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
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
