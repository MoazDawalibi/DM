import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { toast } from 'react-toastify';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCcg92Eqrw7TzL8fBQVklVKXwuT3hu0GIQ",
  authDomain: "dm-store-678d4.firebaseapp.com",
  projectId: "dm-store-678d4",
  storageBucket: "dm-store-678d4.appspot.com",
  messagingSenderId: "91725694575",
  appId: "1:91725694575:web:6ce7f7d0dfdf807c376f9a",
  measurementId: "G-TZRGSK472N"
};

// Constants for local storage keys
export const KEY_NOTIFICATION_PERMISSION = 'KEY_NOTIFICATION_PERMISSION';
export const FCM_TOKEN_KEY = 'DM_FCM_TOKEN_KEY';

// Initialize Firebase
export const initializeFirebase = () => {
  initializeApp(firebaseConfig);

};

// Request notification permission and get FCM token
export const requestPermission = async (): Promise<any> => {
  initializeFirebase();

  if (typeof Notification === 'undefined') {
    console.warn('Firebase Messaging is not supported in this browser.');
    return;
  }

  const messaging = getMessaging();

  // try {
    // const permission = await Notification.requestPermission();


    // if (permission === "granted") {
      const currentToken = await getToken(messaging);


      // localStorage.setItem(KEY_NOTIFICATION_PERMISSION, 'yes');
      localStorage.setItem(FCM_TOKEN_KEY, currentToken || '');
      // toast.success("Notifications enabled successfully.");
      return currentToken ;
    // } 
    // else {
    //   localStorage.setItem(KEY_NOTIFICATION_PERMISSION, 'no');
    //   toast.error("Notifications blocked. Please enable them in your browser.");
    // }
  // } 
  // catch (err) {
  //   localStorage.setItem(KEY_NOTIFICATION_PERMISSION, 'no');
  //   toast.error("Can't create FCM token.");
  //   console.error('An error occurred when requesting to receive the token:', err);
  // }
};

// Request notification permission, get FCM token, and log out
export const requestPermissionWithLogout = async (logout: () => void): Promise<void> => {
  initializeFirebase();

  if (typeof Notification === 'undefined' || !('serviceWorker' in navigator)) {
    console.warn('Firebase Messaging is not supported in this browser.');
    return;
  }

  const messaging = getMessaging();

  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const currentToken = await getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY' });
      localStorage.setItem(KEY_NOTIFICATION_PERMISSION, 'yes');
      localStorage.setItem(FCM_TOKEN_KEY, currentToken || '');
      toast.success("Notifications enabled successfully.");
      logout();
    } else {
      localStorage.setItem(KEY_NOTIFICATION_PERMISSION, 'no');
      toast.error("Notifications blocked. Please enable them in your browser.");
    }
  } catch (err) {
    localStorage.setItem(KEY_NOTIFICATION_PERMISSION, 'no');
    toast.error("Can't create FCM token.");
    console.error('An error occurred when requesting to receive the token:', err);
  }
};
