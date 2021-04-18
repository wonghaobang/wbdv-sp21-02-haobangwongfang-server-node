// const quizzes = require('./quizzes.json')

const quizzesModel = require("../../models/quizzes/quizzes-model")

const findAllQuizzes = () => {
    // return quizzes
    return quizzesModel.find()              // this returns a promise
}
const findQuizById = (quizId) => {
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })

    // return quizzesModel.find({_id: quizId})                                      // find always returns an array [{}]
    return quizzesModel.findById(quizId).populate("questions").exec()            // findById returns just {}
}


// TODO: MongoDB Assignment next week
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}


module.exports = {
    createQuiz,
    findQuizById,
    findAllQuizzes,
    updateQuiz,
    deleteQuiz
}