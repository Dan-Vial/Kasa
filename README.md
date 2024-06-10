# Kasa
Créez une application web de location immobilière avec [React](https://fr.react.dev/), [React Router](https://reactrouter.com/en/main)..., dans un environnement [vite](https://vitejs.fr/).

install: 

```
npm i
```

## repo main code source: [Kasa](https://github.com/Dan-Vial/Kasa)

### Pour démarrer le serveur de développement, utilisez la commande suivante :

```
npm run dev
```

### Pour construire et démarrer le serveur preview (pré prod), utilisez les commandes suivante :

```
npm run build
npm run preview
```

### Bonus | Pour démarrer le serveur de développement avec option --host + code studio, utilisez la commande suivante :

Code Studio s'ouvre sur le projet.

Avec l'option --host, vous pouvez tester votre application sur votre mobile si connecté au même réseau.

```
nop run codedev
```

## repo release distribuable: [Kasa](https://github.com/Dan-Vial/Kasa/tree/release)

Voici une version distribuable à utiliser sur un serveur en production.
Pensez à configurer votre serveur pour qu'il puisse fonctionner avec React Router.

### Configurez Node.js pour servir votre application, faites en sorte que votre gestionnaire de requêtes pointe sur votre index.html.
```
res.sendFile(path.join(__dirname, 'dist/index.html'));
```

### Configurez Express Node.js pour servir votre application :

```
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
```

### Configurez Apache pour servir votre application dans un virtualhost ou fichier .htaccess :
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Si vous devez rediriger des requêtes Apache vers votre serveur Node.js, utilisez le module proxy d'Apache. Ajoutez ceci à votre configuration Apache :

```
ProxyRequests Off
ProxyPass / http://localhost:port/
ProxyPassReverse / http://localhost:port/
```
