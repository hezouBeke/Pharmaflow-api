# PharmaFlow API

API REST de gestion de pharmacie : catégories, médicaments, clients et ventes multi-produits, avec authentification JWT et gestion des rôles (Admin / Vendeur).

## Stack technique

- Node.js, Express
- MongoDB, Mongoose
- JWT (authentification), bcryptjs (hachage des mots de passe)
- Joi (validation des données)

## Fonctionnalités

**Disponibles**
- [x] Inscription et connexion (JWT)
- [x] Gestion des rôles (Admin / Vendeur)
- [x] CRUD Catégories et Médicaments (écriture réservée aux admins)
- [x] CRUD Clients (client optionnel sur une vente)
- [x] Ventes multi-produits avec calcul automatique du montant total
- [x] Décrémentation automatique du stock à chaque vente
- [x] Annulation d'une vente avec réincrémentation du stock (soft delete)
- [x] Alerte de stock faible (seuil : 10 unités)
- [x] Validation des données avec Joi (création et modification)

**À venir**
- [ ] Gestion centralisée des erreurs
- [ ] Pagination
- [ ] Documentation Swagger
- [ ] Rôle Caissier et système de paiement

## Règles métier

- Le prix d'un médicament est copié dans la ligne de commande au moment de la vente : modifier le prix plus tard n'affecte pas l'historique.
- Une vente n'est jamais supprimée, elle est **annulée** (`status: "annulée"`) pour garder une trace. L'annulation remet le stock à jour.
- Une vente `terminée` ne peut être modifiée ou annulée que par un **admin**.
- Le montant total est calculé par le serveur et ne peut pas être modifié par l'utilisateur.

## Modèle de données

Vente → Ligne_commande → Médicament → Catégorie  
Vente → Client (optionnel)  
Vente → Utilisateur (celui qui a effectué la vente, rôle `admin` ou `vendeur`)



## Installation

```bash
git clone https://github.com/hezouBeke/Pharmaflow-api.git
cd Pharmaflow-api
npm install
cp .env.example .env
npm run dev
```

Variables à renseigner dans `.env` :

| Variable | Description |
|---|---|
| `PORT` | Port du serveur (ex. 3000) |
| `MONGO_URI` | Lien de connexion MongoDB |
| `JWT_SECRET` | Clé secrète pour signer les tokens |

## Authentification

Après la connexion, envoie le token dans l'en-tête des routes protégées :

```
Authorization: Bearer <ton_token>
```

## Endpoints

### Auth

| Méthode | Route | Description | Accès |
|---|---|---|---|
| POST | `/auth/register` | Créer un compte | Public |
| POST | `/auth/login` | Se connecter, reçoit un token | Public |

```json
// POST /auth/register
{
  "name": "Kofi",
  "sex": "male",
  "email": "kofi@exemple.com",
  "password": "motdepasse",
  "age": 28,
  "tel": "93217829"
}

// POST /auth/login → { "token": "eyJhbGciOi..." }
```

### Catégories

| Méthode | Route | Description | Accès |
|---|---|---|---|
| POST | `/category` | Créer une catégorie | Admin |
| GET | `/category` | Lister les catégories | Connecté |
| GET | `/category/:id` | Obtenir une catégorie | Connecté |
| PUT | `/category/:id` | Modifier | Admin |
| DELETE | `/category/:id` | Supprimer | Admin |

### Médicaments

| Méthode | Route | Description | Accès |
|---|---|---|---|
| POST | `/medic` | Créer un médicament | Admin |
| GET | `/medic` | Lister (avec champ `alert` de stock) | Connecté |
| GET | `/medic/:id` | Obtenir un médicament | Connecté |
| GET | `/medic/:id/check-stock` | Vérifier le stock | Connecté |
| PUT | `/medic/:id` | Modifier (champs partiels acceptés) | Admin |
| DELETE | `/medic/:id` | Supprimer | Admin |

### Clients

| Méthode | Route | Description | Accès |
|---|---|---|---|
| POST | `/client` | Créer un client | Connecté |
| GET | `/client` | Lister les clients | Connecté |
| GET | `/client/:id` | Obtenir un client | Connecté |
| PUT | `/client/:id` | Modifier | Connecté |
| DELETE | `/client/:id` | Supprimer | Connecté |

### Ventes

| Méthode | Route | Description | Accès |
|---|---|---|---|
| POST | `/vente` | Créer une vente | Admin, Vendeur |
| GET | `/vente` | Historique des ventes | Admin, Vendeur |
| GET | `/vente/:id` | Vente + ses lignes de commande | Admin, Vendeur |
| PUT | `/vente/:id` | Modifier le statut ou le client | Admin, Vendeur (admin si `terminée`) |
| DELETE | `/vente/:id` | Annuler la vente (stock réincrémenté) | Admin, Vendeur (admin si `terminée`) |

```json
// POST /vente
{
  "client": "ID_CLIENT (optionnel)",
  "lignes": [
    { "medicament": "ID_MEDICAMENT", "quantite": 2 }
  ]
}
```

## Structure du projet

```
├── config/        # Configuration
├── controllers/   # Reçoivent la requête, renvoient la réponse
├── services/      # Logique métier
├── models/        # Schémas Mongoose
├── middleware/    # authMiddleware, authorize, validate
├── validators/    # Schémas Joi
├── routes/        # Définition des routes
├── docs/          # Diagramme UML
└── server.js
```

## Auteur

**Hèzou BEKE** · [GitHub](https://github.com/hezouBeke) · [Portfolio](https://hezou-portofolio.vercel.app)