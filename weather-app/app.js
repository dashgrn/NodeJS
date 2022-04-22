const request = require('request')

const URL = 'http://api.weatherstack.com/current?access_key=72f69c0eb399f6c856f88b5cf5234483&query=medellin'

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFzaGciLCJhIjoiY2wyOWd2aGVnMGoyczNicGNzaGQ2ZndocCJ9.UB7cGURYwYFiLBZqhErOCQ&limit=1'

//current weather request
/*request({ url: URL, json: true},(err, response) => {
    if (err) {
        console.log('error', err)
    } else if (response.body.error) {
        console.log('unable to find location')
    } else {
        const weatherData = response.body.current

        console.log(`${weatherData.weather_descriptions[0]}. Its currently ${weatherData.temperature} degrees out. It feels like ${weatherData.feelslike} degrees out`)
    }

})*/


//geocoding request
/*
request({url: geocodeURL, json: true}, (err, response) => {
    if (err) {
        console.log('can not connect to server', err)
    } else if (response.body.features.length === 0) {
        console.log('unable to find location')
    } else {
        const weatherData = response.body
        const latitude = weatherData.features[0].center[1]
        const longitude = weatherData.features[0].center[0]

        console.log(`coordinates for Los Angles are: ${latitude}, ${longitude}`)
    }
})*/


const geocode = (address, callback) =>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZGFzaGciLCJhIjoiY2wyOWd2aGVnMGoyczNicGNzaGQ2ZndocCJ9.UB7cGURYwYFiLBZqhErOCQ&limit=1`

    request({url:url, json:true}, (err, response) =>{
        if (err){
            callback('unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('can not find location', undefined)
        }
    })
}

geocode('new york', (err, data) => {
    console.log('error', err)
    console.log('data,',data)
})