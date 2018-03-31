const fs = require('fs')
const path = require('path')
const express = require('express')

const routes = express.Router()

module.exports = routes

// 1. home route
routes.get('/', (req, res) => {
    res.send('home page')
  })
 