const express = require('express')
const app = express()
const port = 3000
const Route = require('./routes');

app.use(express.json())

app.use(Route)

app.listen (port, () => {
  console.log(`Example app listening on port ${port}`)
})
