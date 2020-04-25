export function getPollStatsUIModel(poll, authedUser) {
  console.log(poll);
  console.log(authedUser);
  const totalVotes =
    (poll.optionOne.votes.length + poll.optionTwo.votes.length) * 1.0;
  const optionOnePercentage = parseFloat(
    poll.optionOne.votes.length > 0
      ? ((poll.optionOne.votes.length / totalVotes) * 100.0).toPrecision(2)
      : 0
  );
  const optionTwoPercentage = 100 - optionOnePercentage;

  return {
    optionOne: {
      stats: optionOnePercentage,
      statsText: `${poll.optionOne.votes.length} out of ${totalVotes}`,
      text: poll.optionOne.text,
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
  const usersArr = Object.keys(users).map((key) => users[key]);
  const sortedUsers = usersArr.sort((u1, u2) => getScore(u2) - getScore(u1));
  return sortedUsers.map(mapUserToLeader);
}

export function getPreviewUIMode(poll){
  const words=poll.optionOne.split(" ")
  words.pop()
  words.shift()
  return {
    title:"Would you rather",
    preview: `..${words.join(" ")}..`
  }
}

function mapUserToLeader({ name, avatarURL, answers, questions }) {
  return {
    name,
    avatarURL,
    score: Object.keys(answers).length + questions.length,
    answersCount: Object.keys(answers).length,
    questionsCount: questions.length,
  };
}

const getScore = (user) =>
  user.questions.length + Object.keys(user.answers).length;


  