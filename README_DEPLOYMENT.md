# Souviens-Toi - Plateforme de Mémoire Spirituelle

## 📖 Description

Souviens-Toi est une plateforme web moderne construite avec Vue.js 3, Vite et TailwindCSS, dédiée à la préservation de la mémoire spirituelle et à la diffusion du Message prophétique.

## 🚀 Déploiement sur Vercel

### Prérequis

- Node.js 18+ et npm 8+
- Compte Vercel
- Repository Git connecté à Vercel

### Configuration Automatique

Les fichiers de configuration sont déjà optimisés pour Vercel :

- `vercel.json` - Configuration principale Vercel
- `vercel.config.js` - Configuration JavaScript alternative
- `package.json` - Scripts et dépendances optimisés
- `vite.config.js` - Build optimisé pour production

### Étapes de Déploiement

1. **Installation des dépendances**
   ```bash
   npm install
   ```

2. **Build local (test)**
   ```bash
   npm run build
   npm run preview
   ```

3. **Déploiement sur Vercel**
   
   Via CLI :
   ```bash
   # Installation de Vercel CLI
   npm i -g vercel
   
   # Déploiement production
   npm run deploy:vercel
   
   # Déploiement preview
   npm run deploy:preview
   ```
   
   Via Dashboard Vercel :
   1. Connecter votre repository GitHub/GitLab
   2. Vercel détecte automatiquement Vue.js + Vite
   3. Configurez les variables d'environnement si nécessaire
   4. Cliquez sur "Deploy"

### Configuration Vercel

#### Variables d'Environnement
```bash
NODE_ENV=production
```

#### Build Settings
- **Framework** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

#### Routes et Headers
- SPA routing configuré (toutes les routes → index.html)
- Headers de sécurité activés
- Cache optimisé pour les assets statiques

## 🌐 Configuration Apache (.htaccess)

Le fichier `.htaccess` est configuré pour :

- **SPA Routing** : Redirection des routes vers index.html
- **Sécurité** : Headers CSP, XSS, Frame protection
- **Performance** : Cache statique 1 an, compression Gzip
- **HTTPS** : Force SSL (décommenter si nécessaire)
- **Protection** : Accès bloqué aux fichiers sensibles

### Déploiement sur Apache

1. Copier les fichiers du build dans le répertoire web
2. Assurer que `.htaccess` est à la racine
3. Vérifier les permissions (755 pour dossiers, 644 pour fichiers)

## 📁 Structure des Fichiers de Configuration

```
sht/
├── vercel.json              # Configuration Vercel principale
├── vercel.config.js          # Configuration Vercel JavaScript
├── .vercelignore            # Fichiers ignorés par Vercel
├── .htaccess               # Configuration Apache
├── package.json            # Dépendances et scripts
├── vite.config.js          # Configuration build Vite
└── README.md               # Ce fichier
```

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite",                    // Développement local
  "build": "vite build",          // Build production
  "preview": "vite preview",      // Preview build local
  "serve": "vite preview --port 3000",
  "build:analyze": "vite build --mode analyze",
  "deploy:vercel": "vercel --prod",    // Déploiement Vercel prod
  "deploy:preview": "vercel"           // Déploiement Vercel preview
}
```

## 🚀 Performance Optimizations

### Build Optimizations
- **Code splitting** : Vendor et UI chunks séparés
- **Minification** : Terser avec suppression console/debugger
- **Tree shaking** : Élimination du code non utilisé
- **Asset optimization** : Images et fonts optimisées

### Cache Strategy
- **Static assets** : 1 an cache (immutable)
- **HTML files** : 1 heure cache
- **Compression Gzip** : Activée pour tous les types MIME

### Security Headers
- **Content Security Policy** : Restriction des sources
- **X-Frame-Options** : DENY
- **X-XSS-Protection** : Mode block
- **Referrer-Policy** : Strict origin

## 🌍 Déploiement Multi-Plateforme

### Vercel (Recommandé)
- ✅ Déploiement automatique
- ✅ CDN global intégré
- ✅ HTTPS automatique
- ✅ Preview environments
- ✅ Analytics intégré

### Apache
- ✅ Configuration .htaccess complète
- ✅ Support des routes SPA
- ✅ Headers sécurité et performance
- ✅ Compression et cache

### Autres Plateformes
Les fichiers de configuration sont compatibles avec :
- Netlify
- GitHub Pages
- GitLab Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🐛 Dépannage

### Problèmes Communs

1. **Build échoue**
   ```bash
   # Nettoyer et réinstaller
   rm -rf node_modules dist
   npm install
   npm run build
   ```

2. **Routes 404 sur Vercel**
   - Vérifier `vercel.json` routes configuration
   - Assurer `base: './'` dans `vite.config.js`

3. **Headers non appliqués sur Apache**
   - Activer `mod_headers.c` et `mod_rewrite.c`
   - Vérifier permissions `.htaccess`

4. **Assets non chargés**
   - Vérifier `assetsDir: 'static'` dans build config
   - Confirmer les chemins relatifs

### Support

- **Documentation Vercel** : https://vercel.com/docs
- **Documentation Vite** : https://vitejs.dev/guide/build.html
- **Vue.js Deployment** : https://vuejs.org/guide/quick-start.html

## 📝 Notes de Déploiement

1. **Premier déploiement** : Vercel détecte automatiquement Vue.js + Vite
2. **Mises à jour** : Push sur main = déploiement auto
3. **Pull requests** : Déploiement preview automatique
4. **Personnalisation** : Variables d'environnement via dashboard Vercel
5. **Domaine personnalisé** : Configurable dans settings Vercel

---

**Souviens-Toi Platform** - Mémoire Éternelle, Message Intemporel 🕊️
