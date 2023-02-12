const express = require('express')
const path = require('path')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname,'./templates/views')
const partialspath = path.join(__dirname,'./templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialspath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: "Weather App",
        name: "Archman07"
    })
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title: "About Me",
        name: "Archman07"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'This is some helpful text.',
        title:"Help",
        name:"Archman07"
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        errorMessage:"Help article not found",
        title:"404",
        name:"Archman07"
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address term'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage:"Page not found",
        title:"404",
        name:"Archman07"
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})