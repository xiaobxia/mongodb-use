/**
 * Created by xiaobxia on 2018/1/11.
 */
const Animal = require('../Animal');
Animal.updateOne({name: 'cat'}, {age: 12}).then((res)=>{
  console.log(res.result)
});

Animal.update({name: 'cat'}, {age: 12}).then((res)=>{
  console.log(res.result)
});

Animal.updateMany({name: /cat/i}, {age: 12}).then((res)=>{
  console.log(res.result)
});

