import React, { Component } from "react";
import { connect } from "react-redux";
import PollsTabs from "./PollsTabs";

class Dashboard extends Component {

  render() {
     return this.props.polls && Object.keys(this.props.polls).length > 0 ? (
      <div>
        <PollsTabs polls={this.props.polls} />
      </div>
    ) : (
      <div>Loading</div>
    )
  }
}
function mapStateToProps({ polls }) {
  return { polls };
}
export default connect(mapStateToProps)(Dashboard);
