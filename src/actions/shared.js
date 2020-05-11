import { getInitialData } from '../api'
import { setAuthedUser } from '../actions/authedUser'
import  receiveUsers  from '../actions/users'
import { receivePolls } from '../actions/polls'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(questions))
        //dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}