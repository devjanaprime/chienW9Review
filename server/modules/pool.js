// requires
const pg = require( 'pg' );
// pool
const pool = new pg.Pool({
    database: 'inventory',
    host: 'localhost',
    port: 5432,
    max: 15,
    idleTimeoutMillis: 30000
})
// exports
module.exports = pool;