const util = require('util')

module.exports = {
    log: (...args) => {        
        console.log('>', parseArgs(args).join(' '))
    },
    done: (...args) => {
        console.log('\x1b[32m', 'DONE', '\x1b[0m', parseArgs(args).join(' '))
    },
    success: (...args) => {
        console.log('\x1b[34m', 'SUCCESS', '\x1b[0m', parseArgs(args).join(' '))
    },
    info: (...args) => {
        console.log('\x1b[36m', 'INFO', '\x1b[0m', parseArgs(args).join(' '))
    },
    error: (...args) => {
        console.log('\x1b[31m', 'ERROR', '\x1b[0m', parseArgs(args).join(' '))
    },
    warn: (...args) => {
        console.log('\x1b[31m', 'WARN', '\x1b[0m', parseArgs(args).join(' '))
    }
}

function parseArgs(args) {
    args.forEach((key, index) => {
        if(args[index].constructor === Object || args[index].constructor === Array) args[index] = util.inspect(args[index], { colors: true })
    })
    return args
}