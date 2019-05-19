
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : ''
});

connection.query('USE ecf');




module.exports = connection;

