const express = require("express");
const app = express();
const mongoose = require("mongoose");

//链接mongoDB
const DB_URL = 'mongodb://localhost:27017/job';

//创建数据库文档模型
const User = mongoose.model('user', new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))
//新增数据
User.create({
  name: '发财瞄2',
  age: 2
}, function(err, doc) {
  if (!err) {
    console.log(doc);
  } else {
    console.log(err);
  }
})
User.update({
  _id: "5ad8071696f050a144d4aa61"
}, {
  '$set': {
    name: "王晟越"
  }
}, function(err, doc) {
  if (!err) {
    console.log(doc);
  }
})

//查询数据
app.get("/data", function(req, res) {
  User.find({
    name: "王晟越"
  }, function(err, doc) {
    if (!err) {
      res.json(doc)
    }
  })
})

mongoose.connect(DB_URL, function(err) {
  if (err) {
    console.log(err);
    console.log('数据库链接失败')
  } else {
    console.log('数据库链接成功')
    app.listen(9093, function() {
      console.log('node app start at port 9093');
    })
  }
});
