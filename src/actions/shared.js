import { getInitialData } from '../api'
import  receiveUsers  from '../actions/users'
import { receivePolls } from '../actions/polls'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(questions))
        dispatch(hideLoading())
      })
  }
}