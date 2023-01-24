const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('../12-01-2023/controllers/controller')
const path = require('path');
const port = 3000;


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})

//  app.use('/', require('../12-01-2023/routes/router'))
app.use('/', require('../12-01-2023/validator'))

app.listen(port, () => { 
    console.log(`App running on port ${port}.`)
})