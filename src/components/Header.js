import { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {}

function mapStateToProps({ name, avatarURL }) {
  return { name, avatarURL };
}
export default connect(mapStateToProps)(Header);
