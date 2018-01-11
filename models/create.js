/**
 * Created by xiaobxia on 2018/1/11.
 */
const Animal = require('../Animal');
/***
 * -------------------创建
 */
// 通过类创建
Animal.create({ name: 'cat', age: 20, interest: {football: true}, type: '母的' }, function (err, doc) {
  if (err) return console.error(err);
  console.log(doc);
});

//通过实例创建
const dog = new Animal({name: 'dog', age: 20, interest: {basketball: true}, type: '公的'});
dog.save(function (err, doc) {
  if (err) return console.error(err);
  console.log(doc);
});


