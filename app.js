const chalk=require('chalk')
const yargs=require('yargs')
const getNotes=require('./notes.js')


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
    handler: function(argv){
        console.log('Title: '+argv.title)
        console.log(argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove a node',
    handler:function(argv){
        console.log('removing a note',argv)
    }
})

yargs.command({
    command:'list',
    describe:'listing the notes',
    handler:function(){
        console.log('listing all the notes')
    }
})

yargs.command({
    command:'read',
    describe:'reading the notes',
    handler:function(){
        console.log('reading the notes')
    }
})

yargs.parse()