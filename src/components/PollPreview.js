import { getPreviewUIModel } from "./ui_mappers";
import React, { Component } from "react";
import { connect } from "react-redux";

class PollPreview extends Component {
  //todo navigate to poll screen
  openPoll = (e) => {
    e.preventDefault();
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
  return { preview };
}
export default connect(mapStateToProps)(PollPreview);
