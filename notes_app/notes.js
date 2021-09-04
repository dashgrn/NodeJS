const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    return 'Your notes... are not yet writen'
}

// add note function
const addNote = function (noteTitle, noteBody) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.noteTitle === noteTitle;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            noteTitle: noteTitle,
            noteBody: noteBody
        })
        saveNotes(notes);
        console.log('a new note has been added');
    } else {
        console.log('Note title its already used');
    }
}

// creating delete function
const removeNote = function (removeTitle) {
    const notes = loadNotes();
    const titleToDelete = notes.filter((note) => {
        return note.noteTitle !== removeTitle;
    });
    if (notes.length === titleToDelete.length) {
        console.log(chalk.red.inverse('could not find any note with that title'));
    } else {
        saveNotes(titleToDelete);
        console.log(chalk.red.inverse(`the entry with title : ${removeTitle}, was deleted`));
    }
}


// creating a load note fnct
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return []
    }
}

// creating save notes fnc
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}