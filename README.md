# 🏠 Bienvenue sur ma PWA en Vue.js

## 📖 Prérequis

- **Node.js** (version 16+ recommandée) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (ou yarn si utilisé) : Assurez-vous que npm est installé avec `npm -v`
- **Navigateur compatible PWA** : Chrome, Edge, Firefox, Safari (⚠️ certaines fonctionnalités peuvent ne pas être prises en charge partout)


## ✨ Installation du projet

```bash
npm install
```

## 🔄 Démarrage en mode développement

```bash
npm run dev
```

## 🛠️ Démarrage en mode serveur

```bash
npm run serve
```

## 🌟 Build pour la production

```bash
npm run build
```

## 🌐 Fonctionnalités

- 📸 Prise de photo
- 📞 Appel téléphonique
- 🌍 Prise de position GPS
- ✅ Vérification OTP
- 📢 Chat en temps réel via WebSocket (socket.io) sur un serveur distant
- ⚡ Connaissance du pourcentage de batterie de l'appareil
- ❌🌐 Fonctionnement en mode hors ligne

## 💻 Serveur en production

[PWA en ligne](https://robinson.berthet.angers.mds-project.fr/)

## Utilisation de la PWA 

> [!TIP]
> Si vous mettez à jour la PWA, pensez à vider le cache et à recharger la page pour éviter des conflits avec les fichiers en cache. Vous pouvez aussi forcer le rechargement avec `Ctrl + Shift + R`.  

> [!TIP]
> Pour une meilleure expérience utilisateur, ajoutez la PWA à l'écran d'accueil via le navigateur (Chrome, Edge, etc.).  

> [!TIP]
> La PWA fonctionne sans connexion, mais certaines fonctionnalités nécessitent Internet, comme le chat et la vérification OTP.  

> [!TIP]
> Dans Chrome DevTools (F12), activez l'onglet "Application" puis "Service Workers" pour voir l'état du cache et recharger les ressources.  

---

> [!IMPORTANT]
> La PWA et certaines fonctionnalités (GPS, caméra, etc.) nécessitent une connexion HTTPS pour fonctionner correctement.  

> [!IMPORTANT]
> Les mises à jour peuvent ne pas apparaître immédiatement à cause du cache. Il peut être nécessaire de vider le cache ou d'attendre que le Service Worker prenne en compte les changements.  

> [!IMPORTANT]
> Certaines fonctionnalités comme la localisation GPS et WebSocket peuvent consommer beaucoup de batterie sur mobile.  

> [!IMPORTANT]
> Testez la PWA sur différents navigateurs, car certaines APIs (WebRTC, WebSockets) ne sont pas prises en charge partout (ex: Safari iOS a des limitations).  
