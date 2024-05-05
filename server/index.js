// package.json specifies index.js as main

const express = require('express')
const app = express() // instance of express
const cors = require('cors')

app.use(express.json()) // fix parsing issues
app.use(cors()) // middleware

const db = require('./models')

// Routers
const formRouter = require('./routes/Forms')
app.use("/forms", formRouter)
const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter)


db.sequelize.sync().then( () => {
    app.listen(3001, () => {
        console.log("\nServer running on port 3001\n")
    })
}).catch(err => {
    console.error('Error syncing db', err)
})



