const request = require('postman-request');

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2l3aXNob3QiLCJhIjoiY2p0OGkzbDBoMDhkczQ0cXlqcnl4Nm52MiJ9.HYKyM0sBBz8bQ9ZULgE1Tw&limit=1&country=gb'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to geo services.', undefined)
        } else if(body.features.length === 0){
            callback('Not valid location.', undefined)
        } else{

            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;