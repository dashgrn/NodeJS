const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//custom yargs version
yargs.version('1.1.0')

//functions: add, remove, read, list notes

//creating the add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//creating the remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//creatinh the list command
yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler() {
        notes.listNotes()
    }
})

//creating the read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {

        notes.readNote(argv.title)
    }
})

yargs.parse()