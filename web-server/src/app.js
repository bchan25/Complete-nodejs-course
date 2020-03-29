const path = require('path');
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

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
        message: 'Enter your location and we will return the weather of your location.',
        name: 'Ben Chan'
    })
})

// app.com/weather
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide a valid address.'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    
        if(error){
            return res.send({error})
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            
            if(error){
                return res.send({
                    error: error
                })
            }

            res.send({
                forcast: forecastData,
                location,
                address: req.query.address
            })
        })
    
     })

    
})



// Help Error
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Error',
        message: 'Help article not found.',
        name: 'Ben Chan'
    })
})

// 404 Page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Error',
        message: 'Page not found',
        name: 'Ben Chan'
    })
})

app.listen(3000, () => console.log('Server is up on port 3000.'))

