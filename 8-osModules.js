const os = require('os')

// info about current user
const user = os.userInfo();


// the system uptime in seconds
console.log(os.uptime());

// current OS data 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);
