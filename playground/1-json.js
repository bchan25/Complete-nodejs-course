const fs = require('fs');

// Challenge: Work with JSON and the file system

// Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

// Change the name and age property
data.name = "Ben"
data.age = 32

// Stringify data
const objectJSON = JSON.stringify(data);

// Overwrite JSON with modify data
fs.writeFileSync('1-json.json', objectJSON);

/*
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
*/


/* 
const book = {
    title: '4 Hour Wookweek',
    author: 'Tim Ferris'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);
*/

/* 
// Convert Object to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Parse JSON to use Data
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
*/