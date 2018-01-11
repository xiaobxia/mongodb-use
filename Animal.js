/**
 * Created by xiaobxia on 2018/1/11.
 */
const db = require('./db');

const Schema = db.Schema;
const animalSchema = new Schema({
  name: String,
  type: String,
  age: Number,
  interest: {
    football: Boolean,
    basketball: Boolean
  },
  updated: {
    type: Date,
    default: Date.now
  },
});
const Animal = db.model('Animal', animalSchema);

module.exports = Animal;
