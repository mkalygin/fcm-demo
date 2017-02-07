'use strict';

const config = require('./config');
const Koa    = require('koa');
const Router = require('koa-router');

const koa = new Koa();
const app = new Router();

app.get('/:name', async (ctx) => {
  ctx.body = `Hello, ${ctx.params.name}!\n`;
});

koa.use(app.routes());
koa.listen(config.port);
