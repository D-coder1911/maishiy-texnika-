const { config, parse } = require('dotenv');
const { Pool } = require('pg');

config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    user: process. env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE
}); 

async function query(text, params = []) {
    try {
        const client = await pool.connect();
        const { rows } = await client.query(text, params.length ? params : null);
        client.query();
    }catch(error) {
        console.log('Database error: ${error.message }');
    } finally {
        client.release();
    }
}

module.exports = query;