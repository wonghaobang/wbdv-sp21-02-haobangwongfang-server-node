const questions = require("./questions.json")

const questionsModel = require("../../models/questions/questions-model")

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    // return questions
    return questionsModel.find()
}
const findQuestionsForQuiz = (qzid) => {
    // return questions.filter((question) => question.quizId === qzid)
    return questionsModel.find({quizId: qzid})
}

const findQuestionById = (quid) => {
    return questions.find((question) => question._id === quid)
}




const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion,
    findQuestionById,
    findAllQuestions,
    findQuestionsForQuiz,
    updateQuestion,
    deleteQuestion
}