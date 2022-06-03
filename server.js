const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bands = require('./controllers/bands_controller')

require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

const bandsController = require('./controllers/bands_controllers')
app.use('/bands', bandsController)

const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)

app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
