const request = require('request')
const { API_KEY } = require("../Api_Key")
const forecast = (lat,long,callback) => {
    const url = `http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${lat}, ${long}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(err,undefined)
        } else if (response.body.error) {
            callback('unable to find location',undefined)
        } else {
            callback(undefined,response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degress out.')
        }
    })
}
module.exports = forecast