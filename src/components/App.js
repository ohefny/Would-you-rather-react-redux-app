import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Header from "./Header";

import Login from "./Login";
import NotFoundPage from "./NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { handleInitialData } from "../actions/shared";
import PollCreation from "./Poll/PollCreation";
import PollPage from "./Poll/PollPage";
import LeaderBoard from "./LeaderBoard";
import LoadingBar from "react-redux-loading";
import NotValidPoll from "./NotValidPoll";
class App extends Component {
  componentDidMount() {
    if (!this.props.initialized) this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">{this.getLoginOrAppContent()}</div>
        </Fragment>
      </Router>
    );
    /*     return <Dashboard />; //this.props.authedUser ? <Dashboard /> : <Login />; */
  }

  getLoginOrAppContent = () => {
    console.log("intialized", this.props.initialized);
    console.log("isLoggedIn", this.props.isLoggedIn);
    if (this.props.initialized) {
      if (this.props.isLoggedIn) {
        return AppContent();
      } else {
        return <Route render={() => <Login />} />;
      }
    } else return null;
  };
}
function AppContent() {
  return (
    <Fragment key="dashboard">
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/poll/:id" exact component={PollPage} />
            <Route path="/new" exact component={PollCreation} />
            <Route path="/leaders" exact component={LeaderBoard} />
            <Route path="/not_valid_id" exact component={NotValidPoll} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}
function mapStateToProps({ authedUser, users }) {
  return {
    isLoggedIn: authedUser != null,
    initialized: Object.keys(users).length > 0,
  };
}
export default connect(mapStateToProps)(App);
