const env = require("./env.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,
});

const db = {};

db.connection = sequelize
                    .authenticate()
                    .then(() => {
                        console.log('Connection has been established successfully.');
                    })
                    .catch(err => {
                        console.error('Unable to connect to the database:', err);
                    });
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.food = require("../models/food.model.js")(sequelize, Sequelize);

module.exports = db;
