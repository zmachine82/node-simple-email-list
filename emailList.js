const fs = require('fs')

let emails = []

function loadEmailsFromFile() {
    const emailsFromFile = fs.readFileSync('./emails.json')
    emails = JSON.parse(emailsFromFile)
}

function saveToFile() {
    fs.writeFileSync('./emails.json', JSON.stringify(emails))
}

function addEmail(email) {
    emails.push(email)
    saveToFile()
}

loadEmailsFromFile()

module.exports = {
    emails,
    addEmail
}