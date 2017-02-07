require('dotenv').load();

module.exports = {
  port: process.env.PORT || 1337,
  fcm: {
    serverKey: process.env.FCM_SERVER_KEY
  }
};
