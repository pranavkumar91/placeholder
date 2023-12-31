const express = require('express')
const app = express()
const port = 3000

app.get('/contactus', (req, res) => {
    res.sendFile(__dirname + '/contactus.html');
})

app.get('/tandc', (req, res) => {
    res.sendFile(__dirname + '/tandc.html');
})

app.get('/privacy', (req, res) => {
    res.sendFile(__dirname + '/privacy.html');
})

app.get('/bpsc', (req, res) => {
    res.sendFile(__dirname + '/quiz.html');
})

app.get('/ssc', (req, res) => {
    res.sendFile(__dirname + '/quiz_ssc.html');
})

app.get('/ibps', (req, res) => {
    res.sendFile(__dirname + '/quiz_ibps.html');
})

app.get('/cdpo', (req, res) => {
    res.sendFile(__dirname + '/quiz_cdpo.html');
})


app.get('/refundandcancellation', (req, res) => {
    res.sendFile(__dirname + '/refundandcancellation.html');
})

app.get('/shipanddelivery', (req, res) => {
    res.sendFile(__dirname + '/shipanddelivery.html');
})

app.get('/checkout', (req, res) => {
    res.sendFile(__dirname + '/checkout.html');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})