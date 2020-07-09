
exports.up = function (knex) {
    return knex.schema.createTable('computers', (table) => {
        table.string('codigo').primary().notNullable();
        table.string('ip').notNullable();
        table.string('dominio').notNullable();
        table.string('fabricante').notNullable();
        table.string('modelo').notNullable();
        table.string('numSerie').notNullable();
        table.string('versaoOS').notNullable();
        table.string('chaveWindows').notNullable();
        table.string('versaoOffice').notNullable();
        table.string('chaveOffice').notNullable();
        table.string('obs').nullable();
        table.string('status').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('computers');
};
