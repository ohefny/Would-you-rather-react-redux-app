import { RECEIVE_USERS } from "../actions/users";
import { ANSWER_POLL } from "../actions/polls";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_POLL: {
      return {
        ...state,
        [action.userID]: {
          ...state[action.userID],
          answers: {
            ...state[action.userID].answers,
            [action.pollID]: action.answerOption,
          },
        }, //add answer to user_answers
      };
    }
    default:
      return state;
  }
}
