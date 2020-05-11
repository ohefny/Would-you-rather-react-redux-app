import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap/";
import { handleCreatePoll } from "../../actions/polls";
import { Redirect } from "react-router-dom";

class PollCreation extends Component {
  state = {
    redirectToHome: false,
  };
  constructor() {
    super();
    this.optionOneTxtInput = React.createRef();
    this.optionTwoTxtInput = React.createRef();
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    const optionOne = this.optionOneTxtInput.current.value;
    const optionTwo = this.optionTwoTxtInput.current.value;
    this.props.dispatch(handleCreatePoll(optionOne, optionTwo));

    setTimeout(() => {
      this.setState({ redirectToHome: true });
    }, 1000);
  };
  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="d-flex justify-content-center">
        <Form className="form">
          <Form.Text>Would you rather ?</Form.Text>
          <Form.Group controlId="formOptionOne">
            <Form.Label>First Option</Form.Label>
            <Form.Control
              placeholder="Enter first option"
              ref={this.optionOneTxtInput}
              type="text"
            />
          </Form.Group>

          <Form.Group controlId="formOptionTwo">
            <Form.Label>Second Option</Form.Label>
            <Form.Control
              placeholder="Enter second option"
              ref={this.optionTwoTxtInput}
              type="text"
            />
          </Form.Group>
          <Button
            variant="info"
            type="submit"
            onClick={(e) => this.handleOnSubmit(e)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
function mapStateToProps({ autherUser }) {
  return { autherUser };
}
export default connect(mapStateToProps)(PollCreation);
