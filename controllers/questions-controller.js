module.exports = ((app) => {

    const questionsService = require("../services/questions/questions-service")


    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions().then((allQuestions) => {
            res.json(allQuestions)
        })
    }

    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params.qzid
        questionsService.findQuestionsForQuiz(qzid).then((questions) => {
            res.json(questions)
        })
    }


    const findQuestionById = (req, res) => {
        const qid = req.params.qid
        questionsService.findQuestionById(qid).then((question) => {
            res.json(question)
        })
    }


    app.get("/api/questions", findAllQuestions)
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)
    app.get("/api/quizzes/:qzid/questions", findQuestionById)
})