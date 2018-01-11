/**
 * Created by xiaobxia on 2018/1/11.
 */
const Animal = require('../Animal');
// 选择一个
Animal.findById('5a57110f1649a648984c81f9', function (err, animal) {
  if (err) return console.error(err);
  console.log(animal);
  animal.name = 'cat1';
  animal.save().then((updatedAnimal) => {
    console.log(updatedAnimal);
  });
});
// 可以传正则，name是选择的字段
Animal.find({name: /cat/i}, 'name age').then((animals) => {
  console.log(animals);
});


Animal.find({name: /cat/i, age: { $gt: 17, $lt: 66 }}, 'name age').limit(1).then((animals) => {
  console.log(animals);
});

