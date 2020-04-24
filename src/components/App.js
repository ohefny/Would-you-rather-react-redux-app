import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveUsers } from '../actions/users'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)