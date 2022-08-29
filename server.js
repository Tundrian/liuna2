const express = require('express')
const colors = require('colors')
require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
app.use(cors())
app.set('view-engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

connectDB()

const mainRoutes = require('./routes/mainRoutes')
app.use('/', mainRoutes)

app.listen(process.env.PORt, () => console.log(`Server is running on http://localhost:`.blue + `${process.env.PORT}`.underline.cyan))