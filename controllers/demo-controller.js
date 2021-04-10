module.exports = (app) => {


    app.get('/', function (req, res) {
        res.send('Hello World')
    })

    const add = (req, res) => {
        const a = parseInt(req.params['paramA'])
        const b = parseInt(req.params.paramB)
        res.send(`${a + b}`)       // if we send a number, browser will interpret it as an status code (like 200, 404, etc)
    }

    const subtract = (req, res) => {
        const a = parseInt(req.query['x'])
        const b = parseInt(req.query['y'])
        const c = a - b
        res.send(`${c}`)
    }


    app.get('/add/:paramA/:paramB', add)


    app.get('/subtract', subtract)


}
