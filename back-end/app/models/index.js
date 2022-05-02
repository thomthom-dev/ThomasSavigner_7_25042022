const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

// connection to db
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
;

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./users.model.js")(sequelize, Sequelize);
db.Role = require("./roles.model.js")(sequelize, Sequelize);
db.Department = require("./departments.model.js")(sequelize, Sequelize);
db.Post = require("./departments.model.js")(sequelize, Sequelize);
db.Section = require("./sections.model.js")(sequelize, Sequelize);
db.Comment = require("./comments.model.js")(sequelize, Sequelize);
db.Reading = require("./readings.model.js")(sequelize, Sequelize);
db.Like = require("./likes.model.js")(sequelize, Sequelize);
module.exports = db;