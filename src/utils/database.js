import { Pool } from 'pg';

let conn;

if (!conn) {
    conn = new Pool({
        host: "localhost",
        user: "postgres",
        password: "password",
        database: "testdb",
        port: "5432"
    })
}

export { conn };