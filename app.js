const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

var cors = require('koa-cors');

const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//跨域
app.use(cors());

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');

// var User = require('./models/User');

// var now = Date.now();

// // User.create({
// //     username: 'Gaffey',
// //     password: '123456',
// //     createdAt: now,
// //     updatedAt: now,
// //     version: 0
// // }).then(function(p) {
// //     console.log('created.' + JSON.stringify(p));
// // }).catch(function(err) {
// //     console.log('failed: ' + err);
// // });

// User.findAll({
//     order: 'id DESC'
// }).then(function(rows) {
//     console.log('select:' + JSON.stringify(rows));
// }).catch(function(err) {
//     console.log('failed: ' + err);
// });