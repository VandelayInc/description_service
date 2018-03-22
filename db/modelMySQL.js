// var mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: '13.57.226.98',
//   user: 'remote',
//   password: 'remote',
//   database: 'airbnb'
// })

const Sequelize = require('sequelize');
const sequelize = new Sequelize('airbnb', 'remote', 'remote', {
  host: '13.57.226.98',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max:30,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// connection.connect();
// console.log('connected to airbnbfat')

// const findOne = (id) => {
//   connection.query(`SELECT * FROM giantdata WHERE id = ${id}`, (err, rows, fields) => {
//     if (err) throw err
//     console.log('query response, modelMYSql', rows[0])
//     return rows[0]
//   })
// }

// exports.findOne = findOne;
// exports.connection = connection;
exports.sequelize = sequelize;
