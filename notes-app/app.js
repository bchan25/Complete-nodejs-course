const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customise yargs version
yargs.version('1.1.0');

// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
    
})

// List Command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler(){
        notes.listNotes();
    } 
    
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'Reading note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
    
})

// Need this to work
yargs.parse()

//console.log(yargs.argv);
