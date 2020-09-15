
exports.up = function(knex) {
  return knex.schema.table('computers', (table) => {
      table.dropColumn('dominio'),
      table.string('torre'),
      table.string('alocadoCom')
  })
};

exports.down = function(knex) {
  return knex.schema.table('computers', (table) => {
      table.dropColumn('torre'),
      table.dropColumn('alocadoCom')
      table.string('dominio')
  })
};
