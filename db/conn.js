const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  database: 'employeesystem',
  user: 'root',
  password: '',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('DB connected.');
});

module.exports = conn;
