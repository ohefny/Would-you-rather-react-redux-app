import React,{ Component } from "react";
import { connect } from "react-redux";

class Header extends Component {

    render(){
        return <div>Header</div>
    }
}

function mapStateToProps({ name, avatarURL }) {
  return { name, avatarURL };
}
export default connect(mapStateToProps)(Header);
