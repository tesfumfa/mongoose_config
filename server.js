const express = require('express')
const bodyParser = require('body-parser')
const  routes = require('./routes/api')
const mongoose = require('mongoose')

/* set up express app */
const app = express()

/* connect to mongodb */
mongoose.connect('mongodb://localhost/expressdemo')
mongoose.Promise = global.Promise

/* use body parser must on the top of the routes */
app.use(bodyParser.json())

/* use router */
app.use('/api', routes)

/* 400 error */
app.use(function (req, res) {
  res.status(400).send({ error: 'Not Found' })
})

/* error handler */
app.use(function (err, req, res, next) {
  res.status(500).send({ error: err.message })
})

/* listen fro request */
app.listen(process.env.port || 4000, function () {
  console.log('express begin listening request')
})


