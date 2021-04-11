const fs=require('fs')
const chalk=require('chalk')


const addNote=(title,body)=>{
    const notes=loadNotes()

    const duplicateNote=notes.find((note)=>note.title===title)
    
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }else{
        console.log(chalk.red.inverse('note title duplicate'))
    }

    
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const notRemovedNotes=notes.filter((note)=>(note.title!==title))
    if(notRemovedNotes.length===notes.length){
        console.log(chalk.red.inverse('Title does not exist...'))
    }else{
        saveNotes(notRemovedNotes)
        console.log(chalk.green.inverse('Removed '+title))
    }
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('YOUR NOTES:'))
    notes.forEach(note => {
        console.log('-> '+note.title)
    });
}

const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.green(note.title)+' :')
        console.log('Note -> '+chalk.green.inverse(note.body))
    }else{
        console.log(chalk.red('Could not find title...'))
    }
}


const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataJSON=databuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

module.exports={
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}