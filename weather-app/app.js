const request = require('postman-request');

const url = 'https://api.darksky.net/forecast/04a3e3e70bbf052c3c67e70b1e9a19bd/37.8267,-122.4233'

request({url: url, json: true}, function (error, response, body) {
    console.log(response.body.currently)
 });