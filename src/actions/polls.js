const RECEIVE_POLLS = "RECEIVE_POLLS";
const CREATE_POLL = "CREATE_POLL"; //todo see how we did create tweet in previous project
const ANSWER_POLL = "ANSWER_POLL"; // todo how we did tweet reply

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}
export function createPoll(poll) {
  return {
    type: CREATE_POLL,
    poll,
  };
}
export function answerPoll(pollID, answerID) {
  return {
    type: ANSWER_POLL,
    data: { pollID, answerID },
  };
}
