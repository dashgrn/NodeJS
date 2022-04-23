const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locationInput = process.argv[2]

locationInput ?
    geocode(locationInput, (err, data) => {
        if (err) {
            return console.log('error:', err)
        }

        forecast(data.latitude, data.longitude, (err, forecastData) => {
            if (err) {
                return console.log('error', err)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
    : console.log('a location is needed')