import { createQuestion, answerQuestion, getQuestions } from "../api";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL"; //todo see how we did create tweet in previous project
export const ANSWER_POLL = "ANSWER_POLL"; // todo how we did tweet reply

export function receivePolls(polls) {
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
function answerPoll(pollID, answerOption, userID) {
  return {
    type: ANSWER_POLL,
    answer: { pollID, answerOption, userID },
  };
}
export function handleRecievePolls() {
  return (dispatch) => {
    getQuestions().then(({ questions }) => {
      dispatch(receivePolls(questions));
    });
  };
}
export function handleCreatePoll(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    createQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    }).then((poll) => dispatch(addPoll(poll, authedUser)));
  };
}
export function handleAnswerPoll(pollID, answerOption) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    answerQuestion({ authedUser, qid: pollID, answer: answerOption }).then(() =>
      dispatch(answerPoll(pollID, answerOption, authedUser))
    );
  };
}
