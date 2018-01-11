/**
 * Created by xiaobxia on 2018/1/11.
 */
const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;
const db = mongoose.connect(
  'mongodb://127.0.0.1:27017/use',
  {
    poolSize: 20,
    //生产环境使用false
    autoIndex: true
  },
  (err) => {
    if (err) {
      console.error('connect to %s error: ', 'mongodb://127.0.0.1:27017', err.message)
      process.exit(1)
    }
  }
);

module.exports = db;

