# 🎵 Lecteur de Musique – Music Player Web

Un **lecteur de musique web moderne et responsive**, développé en **HTML, CSS et JavaScript**, permettant de lire une playlist audio avec des fonctionnalités complètes (play, pause, navigation, progression, playlist dynamique).

---

## 🚀 Fonctionnalités

- ▶️ Lecture / ⏸️ Pause de la musique
- ⏭️ Musique suivante / ⏮️ Musique précédente
- 📜 Playlist dynamique générée automatiquement
- 🎧 Changement de musique en cliquant sur la playlist
- 📊 Barre de progression interactive (clic pour avancer/reculer)
- ⏱️ Affichage du temps courant et de la durée totale
- 🔁 Passage automatique à la musique suivante à la fin
- 📱 Design responsive (mobile & tablette)
- 🎨 Interface moderne avec Font Awesome

---

## 🛠️ Technologies utilisées

- **HTML5**
  - Structure de la page
  - Balise `<audio>` pour la lecture des sons

- **CSS3**
  - Design moderne
  - Flexbox
  - Responsive Design (Media Queries)

- **JavaScript (Vanilla JS)**
  - Gestion audio
  - Manipulation du DOM
  - Événements (`click`, `timeupdate`, `ended`, `loadedmetadata`)

- **Font Awesome**
  - Icônes (play, pause, next, previous, menu)

---

## 📂 Structure du projet

```

📁 Lecteur-de-Musique/
│
├── index.html
├── style.css
├── script.js
│
├── 📁 audios/
│   └── fichiers .mp3
│
├── 📁 images/
│   └── covers des musiques
│
└── README.md

````

---

## ▶️ Utilisation

1. Cloner le projet :
```bash
git clone https://github.com/ton-username/lecteur-de-musique.git
````

2. Ouvrir le fichier `index.html` dans un navigateur

3. Cliquer sur :

* ▶️ pour jouer la musique
* ⏭️ / ⏮️ pour naviguer
* 📊 la barre de progression pour avancer/reculer
* 📜 le menu pour afficher la playlist

---

## 🧠 Logique principale (JavaScript)

* `loadMusic(index)`
  Charge une musique (audio, titre, image)

* `audio.addEventListener("timeupdate")`
  Met à jour la barre de progression et le temps courant

* `audio.addEventListener("ended")`
  Passe automatiquement à la musique suivante

* `progressContainer.addEventListener("click")`
  Permet de skipper la musique en cliquant sur la barre

---

## 📸 Aperçu

<img width="854" height="775" alt="image" src="https://github.com/user-attachments/assets/f7d61646-94ee-4333-be5d-00514ccb3256" />

---

## 📌 Améliorations possibles

* 🔊 Contrôle du volume
* 🔀 Mode aléatoire (shuffle)
* 🔁 Mode répétition
* 🎵 Affichage de la musique active dans la playlist
* 🌙 Mode sombre

---

## 👨‍💻 Auteur

* **Nom** : Lassina Bakary Keïta
* **Projet** : Lecteur de Musique Web
* **Contexte** : Projet personnel / apprentissage JavaScript

---

## 📄 Licence

Ce projet est libre d’utilisation à des fins éducatives.

```
```
