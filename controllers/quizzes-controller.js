// Controllers deal with all things HTTP
// sits between two worlds: the HTTP world and the JavaScript Object world
module.exports = (app) => {

    const quizzesService = require('../services/quizzes/quizzes-service')


    // req, res allows participating in client/server architecture
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes().then((allQuizzes) => {
            res.json(allQuizzes)
        })
    }


    const findQuizById = (req, res) => {
        const qzid = req.params['qzid']
        quizzesService.findQuizById(qzid).then((quiz) => {
            res.send(quiz)
        })
    }


    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qzid', findQuizById)

}