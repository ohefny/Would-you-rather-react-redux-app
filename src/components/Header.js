import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap/";

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <div className="headerContainer">
          <Navbar bg="light" variant="light">
            <Nav className="mr-auto" activeKey="home" defaultActiveKey="home">
              <Nav.Link eventKey="home" href="/">
                Home
              </Nav.Link>
              <Nav.Link eventKey="new" href="/new">
                Create Poll
              </Nav.Link>
              <Nav.Link eventKey="leaders" href="/leaders">
                Leader Board
              </Nav.Link>
            </Nav>
            <Nav inline>
              <Navbar.Text>
                {this.props.name} | <a href="#login">Sign out</a>
              </Navbar.Text>
            </Nav>
          </Navbar>
        </div>
      </>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const { name, avatarURL } = users[authedUser]
  return { name, avatarURL };
}
export default connect(mapStateToProps)(Header);
