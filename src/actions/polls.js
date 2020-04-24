import { getQuestions, createQuestion,answerQuestion } from "../api";

const RECEIVE_POLLS = "RECEIVE_POLLS";
const ADD_POLL = "ADD_POLL"; //todo see how we did create tweet in previous project
const ANSWER_POLL = "ANSWER_POLL"; // todo how we did tweet reply

function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}
function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}
function answerPoll(pollID, answer) {
  return {
    type: ANSWER_POLL,
    data: { pollID, answer},
  };
}
export function handleReceivePolls(){
    return (dispatch)=>{
        getQuestions.then((polls)=>dispatch(receivePolls(polls)))
    }
}
export function handleCreatePoll(optionOneText,optionTwoText){  
    return (dispatch,getState)=>{
        const {authedUser} = getState()
        createQuestion({authedUser,optionOneText,optionTwoText})
        .then((poll)=>dispatch(addPoll(poll)))
    }

}
export function handleAnswerPoll(pollID,answerText){
    return (dispatch,getState)=>{
        const {authedUser} = getState()
        answerQuestion({authedUser,pollID,answerText})
        .then(()=>dispatch(answerPoll(pollID,answerText)))
    }
}