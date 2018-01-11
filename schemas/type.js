/**
 * Created by xiaobxia on 2018/1/11.
 */
const db = require('../index');

const Schema = db.Schema;
// 数据的类型
const schema = new Schema({
  name: {
    type: String,
    uppercase: true
    // lowercase: true,
    // trim: true
  },
  binary: Buffer,
  living: Boolean,
  updated: {
    required: true,
    type: Date,
    default: Date.now
    // min: ,
    // max:
  },
  age: {
    type: Number,
    min: 18,
    max: 65
  },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: {
      type: String,
      lowercase: true,
      trim: true
    }
  }
});

const Type = db.model('Type', schema);
// 实例
let type = new Type;
type.name = 'Statue of Liberty';
type.age = 25;
type.updated = new Date;
type.binary = new Buffer(0);
type.living = false;
type.mixed = {any: {thing: 'i want'}};
type.markModified('mixed');
type._someId = new db.Types.ObjectId;
type.array.push(1);
type.ofString.push("strings!");
type.ofNumber.unshift(1, 2, 3, 4);
type.ofDates.addToSet(new Date);
type.ofBuffer.pop();
type.ofMixed = [1, [], 'three', {four: 5}];
type.nested.stuff = 'good';
type.save(function (err, doc) {
  if (err) return console.error(err);
  console.log(doc);
});
