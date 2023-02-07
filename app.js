const request = require("request")
const API_KEY = require("./Api_Key")

const url = `http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=22.689155253334622, 75.86502147469253&units=f`

request({url:url,json:true},(err,response)=>{
    console.log(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature+' degrees out. It feels like ' + response.body.current.feelslike + ' degress out.')
})