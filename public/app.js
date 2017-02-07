// Initialize Firebase
var config = {
  apiKey:            "AIzaSyDtSHj38TkFZUbVk7sYID8Vme5CKQzBjuQ",
  authDomain:        "fcm-demo-821ab.firebaseapp.com",
  databaseURL:       "https://fcm-demo-821ab.firebaseio.com",
  storageBucket:     "fcm-demo-821ab.appspot.com",
  messagingSenderId: "1031559967118"
};

firebase.initializeApp(config);

function onOnSiteNotificationClick() {
  alert('on-site');
}

function onOffSiteNotificationClick() {
  alert('off-site');
}
