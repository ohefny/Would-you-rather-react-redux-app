import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
class NotValidPoll extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card className="text-center signin-card" bg="light" text="dark">
          <Card.Title>You're hitting a bad Poll url</Card.Title>
          <Card.Subtitle>
            Explore other Polls...
          </Card.Subtitle>
          <Button
            variant="info"
            onClick={(e) => {
              e.preventDefault();
              this.props.history.push("/");
            }}
          >
            Explore
          </Button>
        </Card>
      </div>
    );
  }
}
export default withRouter(NotValidPoll);
