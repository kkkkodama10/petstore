const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const petsRouts = require('./routes/pets')

app.use('/api/v1/pets', petsRouts)

const PORT = process.env.PORT || '3001'
app.listen(PORT, function()
    {
        console.log('I am rnnning!!')
    }
)
