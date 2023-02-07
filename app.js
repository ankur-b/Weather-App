const request = require("request")
const API_KEY = require("./Api_Key")

const url = `http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=22.689155253334622, 75.86502147469253`

request({url:url},(err,response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})