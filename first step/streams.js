const fs = require('fs')

let readStream = fs.createReadStream('./docs/text2.txt', { encoding: 'utf-8' })
let writeStream = fs.createWriteStream('./docs/text3.txt')
let writeStream2 = fs.createWriteStream('./docs/text4.txt')

// readStream.on('data', (chunk) => {
//     console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
//     console.log(chunk) //.toString()
//     writeStream.write(chunk + '\n\n\n\n\n\nv')
// })

readStream.pipe(writeStream2)

