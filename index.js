const express = require('express')
const hbs = require('hbs')
const dotenv = require('dotenv')

const { params } = require('./constants')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('home', params)
})

app.get('/generic', (req, res) => {
  res.render('generic', params)
})

app.get('/elements', (req, res) => {
  res.render('elements', params)
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
