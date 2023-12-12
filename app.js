const express = require('express')
const app = express()
const port = 3000
const Route = require('./routes');
var bodyParser = require('body-parser')


app.use(express.json())
bodyParser.json()
app.use(Route)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen (port, () => {
  console.log(`Example app listening on port ${port}`)
})
