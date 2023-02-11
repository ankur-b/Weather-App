const express = require('express')
const path = require('path')
const hbs = require('hbs')

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
    res.send({
        forecast:'It is snowing',
        location:'Indore'
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