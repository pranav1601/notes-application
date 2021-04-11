const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')


yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Body of the note',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove a node',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'listing the notes',
    handler(){
        console.log('listing all the notes')
    }
})

yargs.command({
    command:'read',
    describe:'reading the notes',
    handler(){
        console.log('reading the notes')
    }
})

yargs.parse()