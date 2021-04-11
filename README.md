# Notes-application

A nodejs backend run application that can be used to add, remove, list or read notes via command line that you want to save for future reference.
The project uses npm version 7.6.0 and Node.js v12.20.2.

Instructions to run and use the application are given below:

## Application Setup

* Start terminal(Mac/Linux) or command window(Windows). Ensure you have git, node and npm installed.
* Run command `https://github.com/pranav1601/notes-application.git`
* Run command `cd notes application`
* install the dependencies-> Run command -> `npm install`

## How to use the application?
### Adding a note:
* run command -> `node app.js add --title="Add_Note_Title_Here" --body="Add_Note_Here"`

### Removing a note:
* run command -> `node app.js remove --title="Add_Title_of_the_note_you_want_to_remove_Here"`

### Listing the notes:
* run command -> `node app.js list`

### Reading a note:
* run command -> `node app.js read --title="Add_Title_of_the_note_you_want_to_read_Here"`