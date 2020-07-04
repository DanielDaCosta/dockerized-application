const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'teste123',
  database: 'daniel_mysql'
});

connection.connect();

app.get('/products', function(req, res) {
  connection.query('SELECT * FROM employees;', function (error, results) {
    if (error) { 
      throw error
    };
    res.send(results.map(item => ({ name: item.first_name, price: item.email })));
    // connection.end();
  });
});

app.listen(9001, '0.0.0.0', function() {
  console.log('Listening on port 9001');
})