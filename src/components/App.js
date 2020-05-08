import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (<Dashboard/>)//this.props.authedUser ? <Dashboard /> : <Login />;
  }
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(App);
