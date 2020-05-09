import { getPreviewUIModel } from "../ui_mappers";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'


class PollPreview extends Component {
  //todo navigate to poll screen
  openPoll = (e) => {
    e.preventDefault();
    this.props.history.push(`/poll/${this.props.id}`)
  };
  render() {
    return (
      <div className="preview">
        <h4>{this.props.preview.title}</h4>
        <p>{this.props.preview.preview}</p>
        <button className="btn" onClick={this.openPoll}>
          View Poll
        </button>
      </div>
    );
  }
}

function mapStateToProps({ polls }, { id }) {
  const preview = getPreviewUIModel(polls[id]);
  return { preview ,id};
}
export default withRouter(connect(mapStateToProps)(PollPreview));
