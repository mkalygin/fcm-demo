'use strict';

const path   = require('path');
const config = require('./config');
const Koa    = require('koa');
const serve  = require('koa-static');

const koa = new Koa();

koa.use(serve(path.join(__dirname, 'public')))
koa.listen(config.port);
