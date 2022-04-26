const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=72f69c0eb399f6c856f88b5cf5234483&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`

    request({url, json: true}, (err, {body}) => {
        if (err) {
            callback('unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('unable to find weather for that location', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                weather_descriptions: body.current.weather_descriptions

            })
        }
    })
}

module.exports = forecast
