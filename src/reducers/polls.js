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
        const {answer}=action
        question[answer.answerOption]={...state[answer.pollID][answer.answerOption],votes:state[answer.pollID][answer.answerOption].votes.concat([answer.userID])}
        return{
            ...state,
            [answer.pollID]:{...state[answer.pollID],...question},
        }
    }
    default:
      return state;
  }
}
