const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=72f69c0eb399f6c856f88b5cf5234483&query=45,-75`

const request = http.request(url, (response) => {
    
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })

})

request.on('error', (err) => {
    console.log('error: ' + err);
})

request.end()