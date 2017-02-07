'use strict';

const path   = require('path');
const config = require('./config');
const Koa    = require('koa');
const Router = require('koa-router');
const serve  = require('koa-static');

const koa = new Koa();
const app = new Router();

koa.use(serve(path.join(__dirname, 'public')))

app.get('/push', async (ctx) => {
  const secs = ctx.query.sleep || 0;
  ctx.body = `push ${secs}`;
});

koa.use(app.routes());

console.log(`Starting server on port ${config.port}...`);
koa.listen(config.port);
