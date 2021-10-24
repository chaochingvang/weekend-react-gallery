const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on(`connect`, () => {
    console.log(`postgreSQL connected`);
});

pool.on(`error`, (error) => {
    console.log(`database connection error`, error);
});

module.exports = pool;