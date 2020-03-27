const express = require('express')

console.log(__dirname)
console.log(__filename)

const app = express()


// app.com
app.get('/', (req, res) => {
    res.send("<h1>Weather</h1>")
})

// app.com/help
app.get('/help', (req, res) => {
    res.send({
        name: "Ben",
        age: 32
    })
})

// app.com/about
app.get('/about', (req, res) => {
    res.send("<h1>About Weather App</h1>")
})

// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: "Sunny",
        location: "Flint"
    })
})

app.listen(3000, () => console.log('Server is up on port 3000.'))

