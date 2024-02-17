const mongoose = require('mongoose');


module.exports = function () {
  mongoose.connect('mongodb://127.0.0.1:27017/todoList')
    .then( () => console.log('Connected to mongoDB...'))
    .catch( err => console.log(err));
};