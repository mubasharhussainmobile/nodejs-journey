// connecctsout app to PostgresSQL database

const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'nodejs_learning',
    user: 'postgres',
    password: '12345678'
})

//test the connection

pool.connect((err,connect,release) => {
    if(err){
        console.log('Database connection failed',err.message)
    }
    else
    {
        console.log('Database connected successfully')
    }
})

module.exports = pool;