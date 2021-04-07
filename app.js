const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/persondet'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const usersRouter = require('./routes/user')
app.use('/user',usersRouter)

app.listen(3000, () => {
    console.log('Server Started')
})
