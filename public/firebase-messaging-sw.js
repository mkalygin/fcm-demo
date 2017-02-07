importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(payload => {
  console.log('[worker] Received push notification: ', payload);
  return self.registration.showNotification(payload.title, payload);
});
