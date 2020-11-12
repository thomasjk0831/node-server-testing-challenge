module.exports = {
    add,
    remove
}

const db = require('./data/connection')

async function add(fruit) {
    return db('fruits').insert(fruit)
}
async function remove(fruit) {
    return db('fruits').delete().where(fruit)

}