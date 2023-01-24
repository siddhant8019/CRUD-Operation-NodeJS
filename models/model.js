const path = require('path');

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    collection: 'api',
    password: 'Sidh@2019',
    port: 5432,
})

module.exports = pool;