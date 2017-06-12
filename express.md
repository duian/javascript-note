# Express

## MVC structure
index -> app.js -> routes.js(router) -> controller -> model

## getting start
### middleware
(req, res, next) => {
  req.locals = req.query.name + req.query.count;
  next();
}

body-parser
cookie-parser
session-parser

```javascript
// index.js
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express.app();
const products = require('./controller/products');

const db = mongoose.connection;

db.on('error', err => {});
db.once('open', () => {});
mongoose.connect('mongodb://locaohost/tests');

const models = path.join(__dirname, 'models');
fs.readDirSync(models)
.filter((file) => ~file.search(/^[^\.].*\.js$/))
.forEach((file) => require(path.join(models, file)));

app.use(bodyParser.json());
app.use(bodyParser.urlencode({ exended: true }));
app.use(cookieParser());
app.use(app.static(path.join(__dirname, 'public')));

app.get('/api/product', products.index);
// controller
const Product = require('../models/product');
exports.index = (req, res) => {
  Product.list()
  .then((result) => {
    res.send({ record: result });
  })
}

// model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: String,
  count: Number,
});

ProductSchema.statics = {
  list(options) {
    const params = options.params || {};
    const limit = options.limit || 0;
    const page = options.page || 0;
    return this.find(params)
    .lean()
    .limit(limit)
    .skip(limit * page)
    .exec();
  }
}
const Product = mongoose.model('Product', ProductSchema);
```

从router中调用controller, 然后调用model的静态或者实例方法操作数据。
