import { RECEIVE_USERS } from "../actions/users";
import {ANSWER_POLL} from "../actions/polls";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ANSWER_POLL:{
        const answer={}
        answer[action.poll.id]= action.poll
        return{
            ...state,
            answers:state[action.userID].answers.concat([answer]) //add answer to user_answers
        }
    } 
    default:
      return state;
  }
}
