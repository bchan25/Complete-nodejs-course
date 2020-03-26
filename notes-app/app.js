const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customise yargs version
yargs.version('1.1.0');

// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note tile',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ' + argv.title)
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a note')
    }
})

// List Command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: () => {
        console.log('Listing notes')
    }
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'Reading note',
    handler: () => {
        console.log('Reading note')
    }
})

// Need this to work
yargs.parse()

//console.log(yargs.argv);
