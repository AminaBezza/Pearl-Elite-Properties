# 🔐 Créer un Super User Admin

## Prérequis

Tu dois d'abord avoir configuré les variables d'environnement dans ton fichier `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=<ta_url_supabase>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<ta_anon_key>
SUPABASE_SERVICE_ROLE_KEY=<ta_service_role_key>
ADMIN_CREATION_TOKEN=<un_token_secret_que_tu_choisis>
```

## Où trouver ces clés

1. Va sur [https://supabase.com](https://supabase.com)
2. Connecte-toi à ton projet
3. Va dans **Settings > API**
4. Copie:
   - **URL**: Project URL
   - **NEXT_PUBLIC_SUPABASE_ANON_KEY**: anon (public) key
   - **SUPABASE_SERVICE_ROLE_KEY**: Service role key

## Créer le Super User

### Option 1: Via cURL (Terminal)

```bash
curl -X POST http://localhost:3000/api/admin/create-superuser \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@pearlelite.qa",
    "password": "StrongPassword123!",
    "token": "ton_admin_creation_token"
  }'
```

### Option 2: Via Node.js Script

Crée un fichier `scripts/create-admin.js`:

```javascript
const email = 'admin@pearlelite.qa'
const password = 'StrongPassword123!'
const token = 'ton_admin_creation_token'

const createAdmin = async () => {
  const response = await fetch('http://localhost:3000/api/admin/create-superuser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, token })
  })
  
  const data = await response.json()
  console.log(data)
}

createAdmin()
```

Puis exécute:
```bash
node scripts/create-admin.js
```

## Connexion

Après création, utilise ces identifiants:
- **Email**: admin@pearlelite.qa
- **Password**: StrongPassword123!

Visite: http://localhost:3000/admin/login

## ⚠️ Sécurité

- ✅ Change le `ADMIN_CREATION_TOKEN` dans `.env.local`
- ✅ Utilise un mot de passe fort
- ✅ Ne commite JAMAIS les clés Supabase dans GitHub
- ✅ Ajoute `.env.local` dans `.gitignore`
