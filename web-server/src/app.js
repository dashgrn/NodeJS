const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to server
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jose Fernandez'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Jose Fernandez'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Do you need help?',
        text: 'We can help you',
        name: 'Jose Fernandez'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.location) {
        return res.send({
            error: 'A location must be provided'
        })
    }

    geocode(req.query.location, (err, {latitude, longitude, location} = {})=> {
        if (err) {
            return res.send({
                error: 'Error getting location'
            })
        }

        forecast ( latitude, longitude, (err, forecastData) =>{
            if (err){
                return res.send({
                    error: 'Error getting weather'
                })
            }

            res.send({
                forecast: forecastData,
                location,
                query: req.query.location
            })
        })
    })
    

})

app.get('/help/*', (req, res) => {
    res.render('helpNotFound', {
        title: 'We are missing that topic',
        errorMessage: 'Help Not Found',
        name: 'Jose Fernandez'
    })
})

app.get('*', (req, res) => {
    res.render('notFound', {
        title: '404',
        errorMessage: 'Page Not Found',
        name: 'Jose Fernandez'
    })
})

app.listen(3000, () => {
    console.log('server running, listening on port 3000');
})