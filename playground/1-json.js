const book = {
    title: '4 Hour Wookweek',
    author: 'Tim Ferris'
}

// Convert Object to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Parse JSON to use Data
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
