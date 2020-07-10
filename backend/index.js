const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const informationRoute = require('./routes/information')

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/information',informationRoute)

db.sequelize.sync().then(()=> app.listen(8000,() => console.log('Listening on port 8000')))