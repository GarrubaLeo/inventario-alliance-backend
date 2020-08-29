
exports.up = function (knex) {
    return knex.schema.createTable('computers', (table) => {
        //Informações de idenficação
        table.string('codigo').primary().notNullable();
        table.string('torre').notNullable();
        table.enu('status', ['S', 'N']).notNullable();
        table.string('usuario')
        table.string('obs').nullable();

        //Ficha técnica
        table.string('ip').notNullable();
        table.string('numSerie').notNullable();
        table.string('fabricante').notNullable();
        table.string('modelo').notNullable();
        table.string('versaoOS').notNullable();
        table.string('chaveWindows').notNullable();
        table.string('versaoOffice').notNullable();
        table.string('chaveOffice').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('computers');
};
