const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/04a3e3e70bbf052c3c67e70b1e9a19bd/' + latitude + ',' + longitude + '?units=uk2'

    request({url: url, json: true}, function (error, response) {

        if(error){
            callback('Unable to connect to weather service', undefined);
        } else if(response.body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + "% chance of rain.") 
        }
        
     })
   
}

module.exports = forecast;