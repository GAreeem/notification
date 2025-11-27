// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyBpApixOmJhflQHIO3YUwKEmLV6g1Y6L44",
  authDomain: "pwa-10d-084.firebaseapp.com",
  projectId: "pwa-10d-084",
  storageBucket: "pwa-10d-084.firebasestorage.app",
  messagingSenderId: "636239827971",
  appId: "1:636239827971:web:fa17d385080fda64f12a36"
});


const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/notification/'));
});