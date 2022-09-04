require('dotenv').config()


// module.exports = {
//     username: process.env.DB_USERNAME,
//     password: '',
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: 'mariadb',
//     port: 3306,
//     define: {
//         timestamps: true,
//         paranoid: true,
//         underscored: true
//     },
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//       }
// }

module.exports = {
    dialect: 'sqlite',
    storage: 'db.sqlite'
}