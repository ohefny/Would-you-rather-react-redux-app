import React, { Component } from "react";
import { connect } from "react-redux";
import { getPollStatsUIModel } from "../ui_mappers";
import { ProgressBar, Card } from "react-bootstrap/";

class PollStats extends Component {
  render() {
    const { optionOne, optionTwo } = this.props;
    return (
      <div>
        <Card >
          <Card.Header className={optionOne.isChosen? "chosen-card-header" : null}>
            {optionOne.text}
          </Card.Header >
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
          <Card.Header className={optionTwo.isChosen? "chosen-card-header" : null}>
            {optionTwo.text}
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

}


function mapStateToProps({ authedUser, polls }, { id }) {
  return getPollStatsUIModel(polls[id], authedUser);
}
export default connect(mapStateToProps)(PollStats);
