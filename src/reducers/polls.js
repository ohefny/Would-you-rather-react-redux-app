import { RECEIVE_POLLS, ADD_POLL, ANSWER_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return { ...state, ...action.polls };
    case ADD_POLL:{
        return {
            ...state,
            [action.poll.id]: action.poll, //should we add question to user_questions
          }
    }
    case ANSWER_POLL:{ //extract all question info and replace questioOption votes and text
        const question={}
        question[action.answerOption]={...state[action.pollID][action.answerOption],votes:state[action.pollID][action.answerOption].votes.concat([action.userID])}
        return{
            ...state,
            [action.pollID]:{...state[action.pollID],...question},
        }
    }
    default:
      return state;
  }
}
