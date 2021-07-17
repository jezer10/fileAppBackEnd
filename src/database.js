const pg = require('pg')

const pool = new pg.Pool({
    host: 'sysevadb.clvmpof1mwut.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'SGAUxzSH7yZzls8jmHBS',
    database: 'final',
    port: 5432,
})

module.exports = pool;