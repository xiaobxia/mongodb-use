/**
 * Created by xiaobxia on 2018/1/11.
 */
const Animal = require('../Animal');
Animal.remove({name: 'dog'}).then((res)=>{
  console.log(res.result)
});
