import React, { Component } from "react";
import { connect } from "react-redux";
import { getPollStatsUIModel } from "../ui_mappers";
import { ProgressBar, Card } from "react-bootstrap/";

class PollStats extends Component {
  render() {
    const { optionOne, optionTwo } = this.props;
    return (
      <div>
        <Card>
          <Card.Header>
            {optionOne.text}
            {optionOne.isChosen ? this.selectedIcon() : null}
          </Card.Header>
          <Card.Body>
            <ProgressBar
              variant="info"
              now={optionOne.stats}
              label={`${optionOne.stats}%`}
            />
            <p>{optionOne.statsText}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            {optionTwo.text}
            {optionTwo.isChosen ? this.selectedIcon() : null}
          </Card.Header>
          <Card.Body>
            <ProgressBar
              variant="info"
              now={optionTwo.stats}
              label={`${optionTwo.stats}%`}
            />
            <p>{optionTwo.statsText}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }

  selectedIcon() {
    return (
      <img
        alt="chosen poll"
        src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_1280.png"
      />
    );
  }
}

function mapStateToProps({ authedUser, polls }, { id }) {
  return getPollStatsUIModel(polls[id], authedUser);
}
export default connect(mapStateToProps)(PollStats);
