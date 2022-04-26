console.log('loading js app from public directory')

const queryForm = document.getElementById('queryForm')
const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')

queryForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    message1.textContent = 'Loading...'
    message2.textContent = ''
    let searchQuery = document.getElementById('searchQuery')

    fetch(`http://localhost:3000/weather?location=${searchQuery.value}`)
    .then(response => {
        response.json().then(data => {
            if (data.error) {
                console.log('error', data.error)
                message1.textContent = data.error
            } else {
                console.log(data)
                message1.textContent = data.location
                message2.textContent = `The temperature is: ${data.forecast.temperature}º C, it feels like ${data.forecast.feelslike}º C. \nGeneral condition is: ${data.forecast.weather_descriptions[0]}`
                searchQuery.value = ''
            }
        })
    })
})