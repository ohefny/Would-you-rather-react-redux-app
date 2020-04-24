import {combineReducers} from 'redux'
import authedUser from '../reducers/users'
import users from '../reducers/users'
import polls from '../reducers/polls'
export default combineReducers({
    authedUser,
    users,
    polls
})


