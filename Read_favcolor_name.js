//NodeJS "readline" API used for recording multiple inputs from user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Requesting multiple user inputs: name, color
rl.question('What is your name?', (name) => {
    rl.question('What is your favorite color?', (color) => {
        console.log(`Thanks you for your response: ${name}, recorded ${color} as your favorite color!`);
        rl.close();
    });
});

