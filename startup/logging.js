const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
  const winston = require('winston');

  winston.exceptions.handle(
    new winston.transports.File({ filename: 'uncaughtExceptions.log' })
  );

  process.on('unhandledRejection', (reason, promise) => {
    winston.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
});

  // winston.exceptions.handle(
  //   new winston.transports.File({ filename: 'uncaughtExceptions.log'}));

  // process.on('unhandledRejection', (ex) => {
  //     throw ex
  // });

  // winston.add(winston.transports.File, {filename: 'logfile.log'});
  // winston.add(winston.transports.MongoDB, {
  //   db: 'mongodb://127.0.0.1:27017/todoList',
  //   level: 'info'
  // }); 
};