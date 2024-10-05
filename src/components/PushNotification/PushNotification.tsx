"use client";

import { useEffect } from 'react';
import { urlBase64ToUint8Array } from '@/utils/urlBase64ToUint8Array';

const PUBLIC_VAPID_KEY = 'BEI933NamyTJX3yq_O487ybrimEAVfw2aAnxOTLKkbyzAr-u-h5tIEhf8SMjslkDtlGXHUkN0Pz5jXpjredIkKU';

const PushNotification: React.FC = () => {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        const permission = await Notification.requestPermission();
        console.log(permission);
        if (permission !== "granted") {
          console.log("Permission not granted");
          return;
        }

        try {
          const registration = await navigator.serviceWorker.register('/sw.js');

        //   console.log('Service Worker registered with scope:', registration, registration.scope);

          let subscription = await registration.pushManager.getSubscription();
          if (subscription === null) {
            const convertedVapidKey = urlBase64ToUint8Array(PUBLIC_VAPID_KEY);
            subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: convertedVapidKey,
            });
          }
          
          console.log('User is subscribed:', subscription);
          //sending request to server from here for subscription

          const response = await fetch("http://localhost:3001/save-subscription", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(subscription),
          });

          console.log(await response.json());

        } catch (error:any) {
          console.error('Service Worker Error:', error?.message);
        }
      }
    };

    registerServiceWorker();
  }, []);

  return (
    <div>
      {/* <h1>Push Notification</h1>
      <p>Push notifications are enabled!</p> */}
    </div>
  );
};

export default PushNotification;
