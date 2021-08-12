let names = ["ali", "veli", "deli"]
let ages = [11, 23, 43]

//console.log("\nin people.js: ", names, "\n")

//exports.names = names
//exports.ages = ages

let greeting = (name) => {
    return `Hello ${name}`
}

module.exports = {
    adlar: names,
    ages,
    selam: greeting
}