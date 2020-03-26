const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customise yargs version
yargs.version('1.1.0');

// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note')
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log('Removing a note')
    }
})

console.log(yargs.argv);
