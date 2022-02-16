import {createPool} from 'mysql2/promise';
import {config} from 'dotenv';

config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})

export {pool};