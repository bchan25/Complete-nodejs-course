const fs = require('fs');

fs.writeFileSync("notes.txt", "This file was created by Node.js");

try {
    fs.appendFileSync('notes.txt', 'Hello Ben');
    console.log('The "data to append" was appended to file!');
} catch (err) {
/* Handle the error */
    console.log(err);
}