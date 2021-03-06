import express from 'express'
import db from './utils/db'
import { createServer } from './utils/server'
// import path from 'path'
require('dotenv').config()

// Connect Database
db.connect({ isTest: false })

const PORT = process.env.PORT || '5000'

const app = createServer(PORT)

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }
