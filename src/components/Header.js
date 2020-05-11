import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav,NavItem } from "react-bootstrap/";
import { withRouter,Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Header extends Component {
  componentDidMount() {
    console.log("Header mounted");
  }
  componentDidUpdate() {
    console.log("Header updated");
  }
  onSignOut = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    return (
      <div className="headerContainer">
        <Navbar bg="light" variant="light">
          <Nav
            className="mr-auto"
            activeKey={this.getLocationKey()}
            defaultActiveKey="home"
          >
            <NavItem href="/">
              <Nav.Link eventKey="home" as={Link} to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem href="/new">
              <Nav.Link eventKey="new" as={Link} to="/new">
              Create Poll
              </Nav.Link>
            </NavItem>
            <NavItem href="/leaders">
              <Nav.Link eventKey="leaders" as={Link} to="/leaders">
              Leader Board
              </Nav.Link>
            </NavItem>
          </Nav>
          <Nav>
            {this.props.isLoggedIn ? (
              <Navbar.Text>
                {this.props.name} |{" "}
                <a onClick={this.onSignOut} href="#login">
                  Sign out
                </a>
              </Navbar.Text>
            ) : null}
          </Nav>
        </Navbar>
      </div>
    );
  }
  getLocationKey() {
    const location = this.props.location.pathname;
    if (location === "/new/" || location === "/new") return "new";
    if (location === "/leaders/" || location === "/leaders") return "leaders";
    else return "home";
  }
}
function mapStateToProps({ users, authedUser }) {
  if (authedUser) {
    const { name, avatarURL } = users[authedUser];
    return { isLoggedIn: true, name, avatarURL };
  } else return { isLoggedIn: false };
}
export default withRouter(connect(mapStateToProps)(Header));
