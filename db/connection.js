const ENV = process.env.NODE_ENV || 'development';
const config =
  ENV === 'production'
    ? {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : require('../knexfile');

module.exports = require('knex')(config);
