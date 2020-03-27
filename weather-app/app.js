const request = require('postman-request');

const geocode = require('./utils/geocode');

/*
const url = 'https://api.darksky.net/forecast/04a3e3e70bbf052c3c67e70b1e9a19bd/37.8267,-122.4233?units=uk2'

request({url: url, json: true}, function (error, response, body) {

    if(error){
        console.log('Unable to connect to weather service');
    } else if(response.body.error){
        console.log('Unable to find location')
    } else{
        console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + "% chance of rain.") 
    }
    
 });
*/

 geocode('London', (error, data) => {
    console.log(data)
 })

 //
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })