const { log } = require('console')
const os =require('os')

//info about the current user

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds `)

// describe the current statsu of os

const curOS= {
    name:os.type(),
    release1:os.release(),
    totalmem1:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(curOS)



