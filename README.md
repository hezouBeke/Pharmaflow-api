# pharmacy-api
API REST de gestion de pharmacie — stock, ventes, clients et utilisateurs avec authentification JWT.

## Endpoints

### Authentification
- `POST /auth/register` — créer un compte
  - Body : `{ name, sex, email, password, age, tel }`
- `POST /auth/login` — se connecter et recevoir un token JWT
  - Body : `{ email, password }`
  - Réponse : `{ token }`