const quizzesDao = require('../../daos/quizzes-dao')

const findAllQuizzes = () => quizzesDao.findAllQuizzes()            // this returns a promise, find always returns an array [{}]
const findQuizById = (qid) => quizzesDao.findQuizById(qid)          // findById returns just {}


module.exports = {
    findAllQuizzes,
    findQuizById
}