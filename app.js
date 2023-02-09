const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode("Indore", (error, data) => {
    console.log('error',error);
    console.log('data',data);
})

forecast(22.720362,75.8682,(error,data)=>{
    console.log('error',error);
    console.log('data',data);
})
