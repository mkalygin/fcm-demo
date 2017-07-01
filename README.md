# fcm-demo
Web push notifications demo using Firebase Cloud Messaging.

### [DEMO](https://fcm-demo-mtbqzgkaoz.now.sh/)

### How to run

1. Setup `config` for your Firebase project in `public/app.js` and `public/firebase-messaging-sw.js`.
2. Install dependencies and setup environment variables:

  ```shell
  $ npm install -g yarnpkg
  $ echo FCM_SERVER_KEY=*your Firebase project server key* > .env
  $ yarn start
  ```

3. Navigate to `http://localhost:1337` in your browser

### NOTE

I use expiremental Koa 2 & async/await feature with `--harmony-async-await` flag of Node.js v7.0.0+ in this repo. The full support of async/await has been introduced recently in Node.js v8.0.0. Make sure to delete the `--harmony-async-await` flag in order to make it work with Node.js v8.0.0+. Koa 2 doesn't work with Node.js < v7.0.0.
