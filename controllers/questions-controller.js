module.exports = ((app) => {

    const questionsService = require("../services/questions/questions-service")

    // api/questions
    const findAllQuestions = (req, res) => {
        const questions = questionsService.findAllQuestions()
        res.send(questions)
    }

    // api/quizzes/:qzid/questions
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params.qzid
        const questions = questionsService.findQuestionsForQuiz(qzid)
        res.send(questions)
    }



    app.get("/api/questions", findAllQuestions)
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)
})