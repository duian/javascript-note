var Koa = require('koa');
var Router = require('koa-router');
var views = require('koa-views');
var serve = require('koa-static');

var app = new Koa();
var router = new Router();

var render = views({
  default: 'jade',
});



router.get('/', async (ctx, next) => {
  await ctx.render('index.jade', {
    user: {
      name: 'duian',
      age: 25,
    },
  });
});

router.get('/ajax', (ctx, next) => {
  ctx.body = {
    name: 'duian',
    age: 25,
  };
});

app.use(serve(`${__dirname}/asserts/`, {
  maxage: 365 * 24 * 60 * 60,
}))
.use(views(`${__dirname}/views`, {
  map: {
    html: 'jade',
  }
}))
.use(router.routes())
.use(router.allowedMethods());

app.listen(9090, (err) => {
  if (!err) {
    console.log('服务已经启动，端口9090');
  }
})
