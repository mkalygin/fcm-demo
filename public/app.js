// Initialize Firebase
var config = {
  apiKey:            "AIzaSyDtSHj38TkFZUbVk7sYID8Vme5CKQzBjuQ",
  authDomain:        "fcm-demo-821ab.firebaseapp.com",
  databaseURL:       "https://fcm-demo-821ab.firebaseio.com",
  storageBucket:     "fcm-demo-821ab.appspot.com",
  messagingSenderId: "1031559967118"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(() => {
    log('Have permission to send push notifications');
    return messaging.getToken();
  })
  .then(token => {
    log(`Received FCM token: ${token}`);
  })
  .catch(err => {
    log(err);
  });

// Handlers for buttons.
function onOnSiteNotificationClick() {
  log('on-site');
}

function onOffSiteNotificationClick() {
  log('off-site');
}

// Simple logging to page element.
const $log = document.getElementById('log');
function log(message) {
  $log.innerHTML += `<br/>${message}`;
}
