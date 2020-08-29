// Update with your config settings.
require('dotenv').config();
const path = require('path')

module.exports = {

  development: {
    client: 'pg',

    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    },

    migrations : {
      directory: `${__dirname}/src/database/migrations`
    },
  },

  production: {
    client: 'pg',

    connection: process.env.DATABASE_URL,

    migrations: {
      directory: `${__dirname}/src/database/migrations`
    }
  }

};
