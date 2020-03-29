const path = require('path');
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express Config
const publicDirectory = path.join(__dirname, '../public')
// Custom HBS path
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Dynamic Templates
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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

