const fs = require('fs');

const book = {
    title: '4 Hour Wookweek',
    author: 'Tim Ferris'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);

/* 
// Convert Object to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Parse JSON to use Data
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
*/