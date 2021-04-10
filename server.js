const express = require('express')      // express exports a function which we can invoke
const app = express()       // once it invokes, all sort of things happen, it sets up/ initializes itself/ gets ready etc..


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



app.listen(4000, () => console.log("listening on port 4000"))