import { RECEIVE_USERS } from "../actions/users";
import { ANSWER_POLL, ADD_POLL } from "../actions/polls";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_POLL:
    const {answer}=action
      return {
        ...state,
        [answer.userID]: {
          ...state[answer.userID],
          answers: {
            ...state[answer.userID].answers,
            [answer.pollID]: answer.answerOption,
          },
        }, //add answer to user_answers
      };
    case ADD_POLL:
     const{poll}=action
      return {
        ...state,
        [poll.author]: {
          ...state[poll.author],
          'questions': state[poll.author]['questions'].concat([poll.id])
        },
      };

    default:
      return state;
  }
}
