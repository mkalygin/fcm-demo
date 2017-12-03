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
