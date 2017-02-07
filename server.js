'use strict';

const path      = require('path');
const { sleep } = require('sleep');

const config  = require('./config');
const Koa     = require('koa');
const Router  = require('koa-router');
const serve   = require('koa-static');
const convert = require('koa-convert');
const FCM     = require('fcm-node');

const koa = new Koa();
const app = new Router();
const fcm = new FCM(config.fcm.serverKey);

koa.use(convert(serve(path.join(__dirname, 'public'))));

app.get('/push', async (ctx) => {
  const token = ctx.query.token;
  const secs  = +ctx.query.sleep || 0;

  if (token) {
    sleep(secs);

    const message = {
      to: token,
      notification: {
        title: 'Hey!',
        body:  'You are awesome!',
        icon:  '/icon.png'
      }
    };

    await fcm.send(message, (err, response) => {
      if (err) {
        console.log('Unable to send push notification: ', err);
      } else {
        console.log('Successfully sent push notification: ', response);
      }
    });

    ctx.status = 200;
  } else {
    ctx.status = 500;
  }
});

koa.use(app.routes());

console.log(`Starting server on port ${config.port}...`);
koa.listen(config.port);
