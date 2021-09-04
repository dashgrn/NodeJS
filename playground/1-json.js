const fs = require('fs');


// // step 1 load the data
// const dataBuffer = fs.readFileSync('1-json.json');

// // step 2: the data is binary, so we have to convert it to string
// const dataJSON = dataBuffer.toString();

// // step 3: parsing the string to JSON object
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name= 'Jose';
user.age = 32;
user.planet = 'Pluto'

const usertoString = JSON.stringify(user);
fs.writeFileSync('1-json.json', usertoString);
console.log(usertoString);