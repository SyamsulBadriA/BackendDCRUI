// src/database.js
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ui_trail',
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;
