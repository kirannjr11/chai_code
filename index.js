require('dotenv').config()

const express = require('express')
const app = express()

// Use process.env.PORT or fallback to 3000 if it's not set in the .env file
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/twitter', (req, res) => {
    res.send('<h1>kiran ghale</h1>') // Fix the closing tag here
})

app.get('/kiran', (req, res) => {
    res.send('I am the developer')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
