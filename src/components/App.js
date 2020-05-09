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
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
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
        return <Route path="/login" exact component={Login} />;
      }
    } else return null;
  };
}
function AppContent() {
  return (
    <Fragment id="dashboard">
      <div className="container">
        <Header />
        <div>
          <Router>
            <Switch>
              <Route path="/login" exact component={Login} />;
              <Route path="/" exact component={Dashboard} />
              <Route path="/poll/:id" component={PollPage} />
              <Route path="/new" component={PollCreation} />
              <Route path="/leaders" component={LeaderBoard} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
        </div>
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
