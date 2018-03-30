const fs = require('fs')
const path = require('path')
const express = require('express')

const routes = express.Router()

module.exports = routes

// 1. home route
routes.get('/', (req, res) => {
    res.send('cards/index')
  })
  
  // 2. rendered page route: /cards
    routes.get('/cards', (req, res) => {
    res.render('cards/index')
  }) 