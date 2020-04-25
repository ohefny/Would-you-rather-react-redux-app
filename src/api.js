import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";


export function getUsers(){
    return _getUsers()
}
export function getQuestions(){
    return _getQuestions()
}
export function createQuestion(questionData){  //{ optionOneText, optionTwoText, author }
    return _saveQuestion(questionData)
}
export function answerQuestion(answerData){ //{ authedUser, qid, answer }
    return _saveQuestionAnswer(answerData)
}