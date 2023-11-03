const express = require('express')
const app = express()
const port = 80

app.get('/contactus', (req, res) => {
    res.sendFile(__dirname + '/contactus.html');
})

app.get('/tandc', (req, res) => {
    res.sendFile(__dirname + '/tandc.html');
})

app.get('/privacy', (req, res) => {
    res.sendFile(__dirname + '/privacy.html');
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