const mongoose = require('mongoose')

const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    questions: [{
        type: String,
        ref: 'QuestionsModel'
    }]
    // questions: [String],
}, {collection: 'quizzes'})



module.exports = quizzesSchema