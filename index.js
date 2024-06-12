const express = require('express')
const dotenv = require('dotenv').config()

const app = express()


app.get('/', (req, res) => {
  res.send('Server is live')
})

app.listen(process.env.PORT, () => {
  console.log(`App Running at http://localhost:${process.env.PORT}`)
})
