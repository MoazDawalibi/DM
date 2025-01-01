importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCcg92Eqrw7TzL8fBQVklVKXwuT3hu0GIQ",
    authDomain: "dm-store-678d4.firebaseapp.com",
    projectId: "dm-store-678d4",
    storageBucket: "dm-store-678d4.appspot.com",
    messagingSenderId: "91725694575",
    appId: "1:91725694575:web:6ce7f7d0dfdf807c376f9a",
    measurementId: "G-TZRGSK472N"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});