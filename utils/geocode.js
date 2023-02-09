const request = require('request')
const {ACCESS_TOKEN} = require("../Api_Key")

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${ACCESS_TOKEN}&limit=1`
    request({ url: url, json: true }, (err, response) => {
        if(err){
            callback('Unable to connect to location services!',undefined)
        }else if(response.body.features === 0){
            callback('Unable to find location. Try another search',undefined)  
        }else{
            callback(undefined,{
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode