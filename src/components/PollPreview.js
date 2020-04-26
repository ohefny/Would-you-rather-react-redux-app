import { getPreviewUIModel } from "./ui_mappers";
import React, { Component } from "react";
import { connect } from "react-redux";

class PollPreview extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.preview.title}</h2>
        <p>{this.props.preview.preview}</p>
        <br/>
      </div>
    );
  }
}

function mapStateToProps({ polls }, { id }) {
  const preview = getPreviewUIModel(polls[id]);
  return { preview };
}
export default connect(mapStateToProps)(PollPreview);
