//NodeJS code to implement read API "readline" and write/filesystem API "fs"
//to create and write into a file, accepting user input


// Incorporate read and write API
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is your name?', (name) => {
    console.log(`Thanks you for your response: ${name}, it will be recorded in "greeting.txt" file`);
    rl.close();
    write_to_file(name);

});

//function write_to_file which uses "filesystem" API to create and write into a file "greeting.txt"
const write_to_file = (name) => {
    fs.writeFile('greeting.txt', `Hello, ${name}!`, err => {
        if (err) {
            console.log('Error occured when attempting to write to file');
        }
    });
};