
exports.up = function (knex) {
    return knex.schema
        .createTable("fruits", tbl => {
            tbl.increments()
            tbl.string("name").unique().notNullable()
        })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('fruits')
};
