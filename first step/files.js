// let os = require('os');

// console.log(os.platform())
// console.log(os.homedir()) 


////////////////////////////////////////////////////////////////

let fs = require('fs');

//console.log((fs))

// fs.readFile('./docs/text.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString())
// })

// fs.readFile('./docs/text.txt', 'UTF-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })
////////////////////////////////////////////////////////////////
// fs.writeFile("./docs/text2.txt", "hello mello dosya", (err) => {
//     if (err) throw err;
//     console.log("dosyaya yazildi")
// })

// fs.readFile('./docs/text2.txt', 'UTF-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })
////////////////////////////////////////////////////////////////

!fs.existsSync('./assets') ?

    fs.mkdir('./assets', (err) => {
        if (err) throw err;
        console.log("klasor olustu")
    })

    :

    fs.rmdir('./assets', (err) => {
        if (err) throw err;
        console.log("klasor silindi")
    })
////////////////////////////////////////////////////////////////

fs.unlink('./docs/text2.txt', (err) => {
    if (err) throw err;
    console.log('dosya silindi')
})









