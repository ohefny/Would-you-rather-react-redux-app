import { getPreviewUIModel } from "./ui_mappers";
import React,{ Component } from "react";
import {connect} from "react-redux"

class PollPreview extends Component {}

function mapStateToProps({ authedUser, polls }, { id }) {
  const preview = getPreviewUIModel(polls[id]);
  return { authedUser, preview };
}
export default connect(mapStateToProps)(PollPreview);
