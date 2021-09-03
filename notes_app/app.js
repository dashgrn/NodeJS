const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// modifiying yargs version
yargs.version('1.0.2');

// defining arguments for managin notes: add, remove, read, list
//creating add cmd
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        noteTitle: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        noteBody: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.noteTitle, argv.noteBody);
    }
})

//creating remove cmd
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing a note: placeholder block');
    }
})

//creating list (all notes) cmd
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('listing all notes: placeholder block');
    }
})

// creating the read cmd 
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('reading a note: placeholder block');
    }
})

yargs.parse();