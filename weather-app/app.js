const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locationInput = process.argv[2]

locationInput ?
    geocode(locationInput, (err, {latitude, longitude, location} = {}) => {
        if (err) {
            return console.log('error:', err)
        }

        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return console.log('error', err)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
    : console.log('a location is needed')