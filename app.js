const request = require("request")
const {API_KEY,ACCESS_TOKEN} = require("./Api_Key")

const url = `http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=22.689155253334622, 75.86502147469253&units=f`

request({url:url,json:true},(err,response)=>{
    console.log(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature+' degrees out. It feels like ' + response.body.current.feelslike + ' degress out.')
})

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${ACCESS_TOKEN}&limit=1`

request({url:geocodeUrl,json:true},(error,response)=>{
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude,longitude)
})