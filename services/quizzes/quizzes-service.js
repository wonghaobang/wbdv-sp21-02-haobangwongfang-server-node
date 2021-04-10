const quizzes = require('./quizzes.json')


const findAllQuizzes = () => {
    return quizzes
}
const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
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