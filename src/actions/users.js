import { getUsers } from "../api";

const RECEIVE_USERS = "RECEIVE_USERS";

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export default function handleReceiveUsers() {
  return (dispatch) => {
    getUsers.then((users) => dispatch(receiveUsers(users)));
  };
}
