const path = require('path');
const express = require('express')


const app = express()
const publicDirectory = path.join(__dirname, '../public')

// Dynamic Templates
app.set('view engine', 'hbs')
// Static HTML Files
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ben Chan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: 'Ben Chan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Me',
        message: 'Enter your location and we will return the weather of your location.'
    })
})

// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: "Sunny",
        location: "Flint"
    })
})

app.listen(3000, () => console.log('Server is up on port 3000.'))

