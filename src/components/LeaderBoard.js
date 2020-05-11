import { getLeaderBoardUIModel } from './ui_mappers';
import React,{ Component } from "react";
import Leader from "./Leader";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  render() {
    return (
      <ul className="dashboard-list">
        {this.props.leaders.map((leader,idx) => (
          <li key={leader.name}>
            <Leader leader={leader} rank={idx+1}/>
          </li> //todo make proper mapping
        ))}
      </ul>
    );
  }

}
function mapStateToProps({users}) {
    return {leaders:getLeaderBoardUIModel(users)}
  }
  export default connect(mapStateToProps)(LeaderBoard);