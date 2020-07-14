//const mysql = require("mysql2");

//const pool = mysql.createPool({  host: "localhost",  user: "root",databae: "node-complete", password: "taimoor_99",});
//module.exports = pool.promise();

const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("node-complete", "root", "taimoor_99", {
  dialect: "mysql",
});

module.exports = sequelize;
