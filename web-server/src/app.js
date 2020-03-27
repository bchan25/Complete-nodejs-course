const path = require('path');
const express = require('express')


const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))



// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: "Sunny",
        location: "Flint"
    })
})

app.listen(3000, () => console.log('Server is up on port 3000.'))

