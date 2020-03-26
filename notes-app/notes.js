const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes..."
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("Note has been added.")
    } else {
        console.log("Note TITLE taken.")
    }

}

const removeNotes = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length === notes.length){
        console.log(chalk.bgRed("No note found!"))
    }else{
        console.log(chalk.bgGreen("Note removed!"))
        saveNotes(notesToKeep)
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgBlue("Your Notes"))

    notes.forEach(note => {
        console.log("Title: " + note.title + " Body: " + note.body)
    });

}

const loadNotes = () => {
    
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
};