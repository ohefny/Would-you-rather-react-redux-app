import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
class NotValidPoll extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card className="text-center signin-card" bg="light" text="dark">
          <Card.Title>You're rocking</Card.Title>
          <Card.Subtitle>What about creating new polls yourself !!</Card.Subtitle>
          <Button variant="info"
            onClick={(e) => {
              e.preventDefault();
              this.props.history.push("/new");
            }}
          >
            Create New
          </Button>
        </Card>
      </div>
    );
  }
}
export default withRouter(NotValidPoll);
