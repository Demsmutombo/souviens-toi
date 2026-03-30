# Favicon Optimization Notes

Le logo souv.png sera utilisé comme favicon principal. Pour une meilleure expérience utilisateur, voici les tailles recommandées :

## Tailles de Favicon Recommandées

1. **favicon.ico** - 16x16, 32x32, 48x48 (format ICO multi-tailles)
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels  
4. **favicon-96x96.png** - 96x96 pixels (Google TV)
5. **favicon-128x128.png** - 128x128 pixels
6. **favicon-196x196.png** - 196x196 pixels (Favicons modernes)
7. **favicon-512x512.png** - 512x512 pixels (PWA)

## Actuellement Configuré

- **Favicon principal** : /souv.png
- **Apple Touch Icon** : /souv.png
- **Manifest PWA** : /public/manifest.json

## Pour une optimisation complète

Si vous avez besoin de favicon.ico multi-tailles, vous pouvez :
1. Utiliser un convertisseur en ligne (favicon.io, realfavicongenerator.net)
2. Générer à partir de souv.png
3. Placer les fichiers dans /public/

## Configuration Actuelle

index.html utilise déjà le logo souv.png comme favicon avec :
```html
<link rel="icon" type="image/png" href="/souv.png" />
<link rel="apple-touch-icon" href="/souv.png" />
```

Cette configuration fonctionne bien pour la plupart des navigateurs modernes.
