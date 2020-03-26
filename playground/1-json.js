const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)


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