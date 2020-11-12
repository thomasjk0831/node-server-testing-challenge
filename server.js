const express = require('express')
const server = express()
const db = require('./data/connection')
server.use(express.json())


server.get('/', (req, res) => {
    db("fruits")
        .then(fruit => {
            res.status(200).json(fruit)
        })
        .catch(err => {
            res.status(500).json({ msg: err })
        })
})

server.post('/', (req, res) => {
    db("fruits").insert(req.body, "ids")
        .then(idArr => {
            db("fruits").where({ id: idArr[0] })
                .then(fruit => {
                    res.status(200).json(fruit)
                })
                .catch(err => {
                    res.status(500).json({ msg: err })

                })
        })
        .catch(err => {
            res.json(400).json({ msg: err })
        })
})

server.delete("/:id", (req, res) => {
    db("fruits").delete().where({ id: req.params.id })
        .then(count => {
            if (count > 0)
                res.status(200).json({ msg: "deleted" })
            else
                res.status(200).json({ msg: "cannot be deleted" })
        })
        .catch(err => {
            res.status(400).json({ msg: err })

        })
})

module.exports = server