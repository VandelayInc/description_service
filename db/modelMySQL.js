var mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'airbnbfat'
})

connection.connect();
console.log('connected to airbnbfat')

const findOne = (id) => {
  connection.query(`SELECT * FROM bigcopy WHERE id = ${id}`, (err, rows, fields) => {
    if (err) throw err
    console.log('query response, modelMYSql', rows[0])
    return rows[0]
  })
}

exports.findOne = findOne;
exports.connection = connection;
