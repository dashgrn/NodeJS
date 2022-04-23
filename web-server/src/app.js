const path = require('path')
const express = require('express')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

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
        text: 'We can help you'
    })
})

app.get('/weather', (req, res) => {

    res.send({
        location: 'medelling',
        temperature: 24,
        sky: 'scattered'
    })

})

app.listen(3000, () => {
    console.log('server running, listening on port 3000');
})