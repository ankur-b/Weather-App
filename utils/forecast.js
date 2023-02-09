const request = require('request')
const { API_KEY } = require("../Api_Key")
const forecast = (lat,long,callback) => {
    const url = `http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${lat}, ${long}`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback(err,undefined)
        } else if (body.error) {
            callback('unable to find location',undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}
module.exports = forecast