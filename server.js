const express = require('express')      // express exports a function which we can invoke
const app = express()       // once it invokes, all sort of things happen, it sets up/ initializes itself/ gets ready etc..

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const mongoose = require('mongoose');

// this is local
// mongoose.connect('mongodb://localhost:27017/whiteboard-02', {useNewUrlParser: true, useUnifiedTopology: true});

const uri = process.env.MONGODB_URI;
// mongoose.connect('mongodb+srv://wonghaobang:H123456b@cluster0.wejnv.mongodb.net/whiteboard-02-remote?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});



// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const quizzesController = require('./controllers/quizzes-controller')  // if it starts with a dot, then my file. If without, then node modules
quizzesController(app)


const questionsController = require('./controllers/questions-controller')
questionsController(app)


const quizAttemptsController = require('./controllers/quiz-attempts-controller')
quizAttemptsController(app)



// app.listen(4000)
app.listen(process.env.PORT || 4000);