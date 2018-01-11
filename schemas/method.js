/**
 * Created by xiaobxia on 2018/1/11.
 */
const db = require('../index');

const Schema = db.Schema;

const animalSchema = new Schema({ name: String, type: String });

// 扩展方法
animalSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};
// 可以传参
animalSchema.statics.findByName = function(name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb);
};

animalSchema.query.byName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};

const Animal = db.model('Animal', animalSchema);

Animal.find().byName('fido').exec(function(err, animals) {
  console.log(animals);
});
Animal.findByName('fido', function(err, animals) {
  console.log(animals);
});

const dog = new Animal({ type: 'dog' });

dog.findSimilarTypes(function(err, dogs) {
  console.log(dogs); // woof
});
