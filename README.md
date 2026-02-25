# Zalando Clone - Application E-Commerce

Ce projet est une application web e-commerce développée avec React, Vite et Tailwind CSS. Il s'inspire de l'interface utilisateur de Zalando pour proposer une expérience d'achat moderne, incluant la navigation par catégories, une fiche produit détaillée, ainsi qu'un système complet de favoris et de panier.

## Fonctionnalités Principales

### Catalogue et Navigation

* **Navigation par catégories** : Filtrage des produits pour Homme, Femme et Enfant.
* **Moteur de recherche** : Recherche en temps réel par nom de produit ou par marque.
* **Système de tri** : Possibilité de classer les articles par prix croissant ou décroissant.
* **Layout Grande Largeur** : Interface optimisée pour les écrans larges jusqu'à 1600px afin de maximiser l'espace visuel.

### Expérience Utilisateur

* **Fiche Produit Détaillée** : Présentation avec galerie d'images, gestion des prix promotionnels et sélecteur de tailles.
* **Gestion des Favoris** : Ajout et suppression d'articles dans une liste de souhaits (Wishlist) via un store global.
* **Typographie Optimisée** : Utilisation d'une police de base de 16px et de styles majuscules pour une lisibilité accrue.

### Panier et Paiement

* **Mini-Panier Interactif** : Aperçu du contenu du panier au survol de l'icône dans l'en-tête.
* **Panier Dynamique** : Modification des quantités et calcul automatique du total et des taxes.
* **Récapitulatif de Commande** : Bloc de paiement structuré avec simulation des frais de livraison et modes de paiement.

### Authentification

* **Page de Connexion** : Interface dédiée sur fond sombre proposant l'authentification par e-mail ou via des services tiers (Google, Apple, Facebook).

## Stack Technique

* **Framework** : React.js (Hooks, Router)
* **Outil de Build** : Vite
* **Stylisation** : Tailwind CSS
* **Gestion d'État** : Zustand (State management léger pour le panier et les favoris)
* **Iconographie** : Lucide React

## Installation et Utilisation

1. **Cloner le projet**
```bash
git clone https://github.com/leo-na/mon-zalando-clone.git
cd mon-zalando-clone

```


2. **Installer les dépendances**
```bash
npm install

```


3. **Lancer l'application en mode développement**
```bash
npm run dev

```


L'application sera disponible par défaut à l'adresse suivante : http://localhost:5173

## Structure des Dossiers

* **src/components/layout/** : Contient les éléments structurels comme le Header et le Footer.
* **src/pages/** : Contient les différentes vues (Boutique, Produit, Panier, Connexion).
* **src/services/** : Contient le fichier de données des produits.
* **src/store/** : Contient la logique de gestion du panier avec Zustand.
* **src/App.jsx** : Configuration principale des routes de l'application.

## Mentions Légales

Ce projet est réalisé dans un cadre d'entrainement. Les noms de marques et les images utilisés sont la propriété exclusive de leurs détenteurs respectifs.
