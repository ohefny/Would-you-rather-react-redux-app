import React, { Component } from "react";
import { Button, Card } from "react-bootstrap/";
import { connect } from "react-redux";
import { objectToArray } from "./ui_mappers";
import {setAuthedUser} from "../actions/authedUser"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedUser: props.users[0].id };
    console.log(props)

  }
  handleChange = (event) => {
    this.setState({ selectedUser: event.target.value });
  };
  handleClick = (event) =>{
    this.props.dispatch(setAuthedUser(this.state.selectedUser))
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card className="text-center signin-card" bg="light" text="dark">
          <Card.Header>
            <Card.Title>Welcome to Would Rather App</Card.Title>
            <Card.Text>Please Sign In to continue</Card.Text>
          </Card.Header>
          <Card.Text>Choose Account</Card.Text>
          <div>
            <form>
              <select value={this.state.selectedUser} onChange={this.handleChange}>
                {this.props.users.map((user) => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            </form>
          </div>
          <Button variant="info" onClick={this.handleClick}>Sign in</Button>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return { users: objectToArray(users) };
}
export default connect(mapStateToProps)(Login);
