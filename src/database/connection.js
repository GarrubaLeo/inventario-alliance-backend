const knexfile = require('../../knexfile');
const connection = require('knex')(knexfile.production);

module.exports = connection;
