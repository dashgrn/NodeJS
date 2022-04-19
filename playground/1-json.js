const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json') //reading json
const dataJSON = dataBuffer.toString() //converting buffer to string
let data = JSON.parse(dataJSON) //converting to obj

data.name = 'Jose'
data.age = 32

let newData = JSON.stringify(data)

fs.writeFileSync('1-json.json', newData)

console.log('data from json', newData)
