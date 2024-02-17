require('express-async-errors');
// const config = require('config');
// const mongoose = require('mongoose');
// const winston = require('winston');
const express = require('express');
// const tasks = require('../routes/tasks');
// const users = require('../routes/users');
// const auth = require('../routes/auth');
// const error = require('../middleware/error');
// // require('winston-mongodb');
// const Joi = require('joi'); 

const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();



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

// if ( !config.get('jwtPrivateKey')) {
//   throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
// };

// mongoose.connect('mongodb://127.0.0.1:27017/todoList')
//     .then( () => console.log('Connected to mongoDB...'))
//     .catch( err => console.log(err));
  
// app.use(express.json());
// app.use('/api/tasks' , tasks);
// app.use('/api/users' , users);
// app.use('/api/auth' , auth); 
// app.use(error);

const port = process.env.PORT || 3008;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// console.log(process.env.PORT);
