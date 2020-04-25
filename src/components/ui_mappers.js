export function getPollStatsUIModel(poll, authedUser) {
  const totalVotes =
    (poll.optionOne.votes.length + poll.optionTwo.votes.length) * 1.0;
  const optionOnePercentage = (
    (poll.optionOne.votes.length / totalVotes) *
    100
  ).toPrecision(2);
  const optionTwoPercentage = 100 - optionOnePercentage;

  return {
    optionOne: {
      stats: optionOnePercentage,
      statsText: `${poll.optionOne.votes.length} out of ${totalVotes}`,
      text: poll.optionTwo.text,
      isChosen: poll.optionOne.votes.includes(authedUser),
    },
    optionTwo: {
      stats: optionTwoPercentage,
      statsText: `${poll.optionTwo.votes.length} out of ${totalVotes}`,
      text: poll.optionTwo.text,
      isChosen: poll.optionTwo.votes.includes(authedUser),
    },
  };
}
export function getLeaderBoardUIModel(users) {
  const usersArr=Object.keys(users).map((key)=>users[key])
  const sortedUsers = usersArr.sort((u1, u2) => getScore(u2) - getScore(u1));
  return sortedUsers.map(mapUserToLeader);
}

function mapUserToLeader({ name, avatarURL, answers, questions }) {
  return {
    name,
    avatarURL,
    score: Object.keys(answers).length+questions.length,
    answersCount: Object.keys(answers).length,
    questionsCount: questions.length,
  };
}

const getScore = (user) => user.questions.length + Object.keys(user.answers).length;
