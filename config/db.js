import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'desafio_ceibal'
});

export default db;