const server = require('./server')
const supertest = require("supertest")
const Fruits = require('./fruitsModel')
const db = require('./data/connection')


describe('/post', () => {
    it("should insert into db", async () => {

        await db('fruits').truncate()


        await Fruits.add({ name: "strawberry" })

        const fruits = await db('fruits')
        expect(fruits).toHaveLength(1)
    })
    it("insert #2", async () => {

        await Fruits.add({ name: "apple" })

        const fruits = await db('fruits')
        expect(fruits).toHaveLength(2)
    })
})
describe('/delete', () => {
    it("should delete from db", async () => {
        await Fruits.remove({ name: "strawberry" })

        const fruits = await db('fruits')
        expect(fruits).toHaveLength(1)
    })
    it(" delete #2 from db", async () => {
        await Fruits.remove({ name: "apple" })

        const fruits = await db('fruits')
        expect(fruits).toHaveLength(0)
    })
})