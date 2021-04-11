const fs=require('fs')
const chalk=require('chalk')

getNotes=function(){
    return 'Notes...'
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>(note.title===title))
    
    if(duplicateNotes.length===0){
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
}