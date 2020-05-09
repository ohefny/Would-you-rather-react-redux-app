import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Header from "./Header";

import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { setAuthedUser } from "../actions/authedUser";
import { handleReceiveUsers } from "../actions/users";
import { handleReceivePolls } from "../actions/polls";
import PollCreation from "./PollCreation";
import PollPage from "./PollPage";
import LeaderBoard from "./LeaderBoard";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceivePolls());
    this.props.dispatch(setAuthedUser("tylermcginnis"));
  }
  render() {
    return (
      <Router>
        <div className="App">
          {this.props.authedUser === null ? (
            <Route render={() => <Login />} />
          ) : this.props.users[this.props.authedUser] ? (
            AppContent()
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Router>
    );
    /*     return <Dashboard />; //this.props.authedUser ? <Dashboard /> : <Login />; */
  }
}
function AppContent() {
  return (
    <Fragment id="dashboard">
      <div className="container">
        <Header />
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/poll/:id" component={PollPage} />
          <Route path="/new" component={PollCreation} />
          <Route path="/leaders" component={LeaderBoard} />
        </div>
      </div>
    </Fragment>
  );
}
function mapStateToProps({ authedUser, users, polls }) {
  console.log(users);
  return { authedUser, users, polls };
}
export default connect(mapStateToProps)(App);
