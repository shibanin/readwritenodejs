//NodeJS timezone utility using third-party module "moment-timezone" 
const moment = require('moment-timezone');

let date = new moment();
console.log(moment().format('dddd'));

//Accept timezone from user
if (process.argv.length != 3) {
    console.log("Error in Usage: node<script-file> <timezone>");
    process.exit(1);
}
else {
    targetTimezone = process.argv[2];
}

//setting default timezone to PST
moment.tz.setDefault('America/Los_Angeles');
console.log(process.argv);

//convert to target timezone in Date, time LLL format
console.log(`Time at the ${targetTimezone} is ${moment().tz(targetTimezone).format('LLL')}`);
