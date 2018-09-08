'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const operatorsAliases = {
    $eq: op.eq,
    $or: op.or,
    $like: op.like,
}
const basename = path.basename(module.filename);
// const env = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.json')[env];
console.log(config);
const db = {};

let sequelize;
if (config.use_env_constiable) {
   sequelize = new Sequelize(process.env[config.use_env_constiable]);
} else {
   sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// if (process.env.NODE_ENV === 'test') {
//   console.log('[test] using in memory database');
//   sequelize = new Sequelize('marbles-site-db', null, null, {
//     dialect: 'sqlite',
//     storage: ':memory:'
//   });
// } else if (process.env.HEROKU_POSTGRESQL_WHITE_URL) {
//   var match = process.env.HEROKU_POSTGRESQL_WHITE_URL
//                 .match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

//   sequelize = new Sequelize(match[5], match[1], match[2], {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     port: match[4],
//     host: match[3],
//     logging: true // false
//   });
// } else {
//   sequelize = new Sequelize('marbles-site-db', null, null, {
//     dialect: 'sqlite',
//     storage: './db/development.sqlite'
//   });
// }


fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(function(file) {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.vendor = require('./vendor')(sequelize, Sequelize);

module.exports = db;
