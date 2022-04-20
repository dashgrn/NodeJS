const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    let notes = loadNotes()

    // const duplicatedNotes = notes.filter(note => note.title === title)  the line below is lest costly
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New Note Added'))
    } else {
        console.log(chalk.bgRed('Note tittle already taken'))
    }

}

const removeNote = (title) => {
    let notes = loadNotes()
    const noteToBeRemoved = notes.filter(note => note.title === title)

    if (noteToBeRemoved.length === 1) {
        let intexToRemove = notes.findIndex(note => {
            return note.title === title
        })
        notes.splice(intexToRemove, 1)
        saveNotes(notes)
        console.log(chalk.bgGreen('Note with title ', title, ' was removed'))
    } else {
        console.log(chalk.bgRed('The note to be removed could not found'));
    }
}

const listNotes = () => {
    let notes = loadNotes()
    console.log(chalk.bgGreenBright('Listing all the notes'))
    notes.map((note, index) => console.log(chalk.bgGreen(chalk.bgMagentaBright(index+1), chalk.bgBlueBright(note.title,':', note.body))))
}

const readNote = (title) => {
    const notes = loadNotes()
    const loadedNote = notes.find((note) => note.title === title)
    if (loadedNote) {
        console.log('Note Found:')
        console.log(chalk.bgGreen(loadedNote.title))
        console.log(`${loadedNote.body}`);
    } else {
        console.log(chalk.bgRed('Note could not be found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}