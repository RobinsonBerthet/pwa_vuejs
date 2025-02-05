/* eslint-disable no-console */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Enregistre le service worker
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration: ServiceWorkerRegistration) => {
        console.log('Service Worker enregistré avec succès:', registration);
      })
      .catch((error: Error) => {
        console.error('Échec de l\'enregistrement du service worker:', error);
      });
  });
} else {
  console.log('Le Service Worker n\'est pas pris en charge par ce navigateur');
}
