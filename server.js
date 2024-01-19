const express = require('express')
const app = express()

const {emails, addEmail} = require('./emailList')

app.use(express.static('./client'))
app.use(express.json())


app.post('/email', (req, res) => {
    addEmail(req.body.email)
    res.json({success: true, email: req.body.email})
})

app.get("/email", (req, res) => {
    res.json(emails)
})

app.listen(5000, () => {
    console.log("server started on 5000")
})