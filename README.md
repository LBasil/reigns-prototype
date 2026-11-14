# Reigns - Prototype

Prototype de mécanique de cartes à balayer, inspiré de *Reigns: Her Majesty*. JavaScript vanilla, sans build.

La carte se glisse à gauche ou à droite à la souris ou au doigt (événements `mousedown/mousemove/mouseup` et `touchstart/touchmove/touchend`).

## Lancer

Ouvrir `index.html` dans un navigateur.

## Fichiers

- `index.html` : interface
- `script.js` : gestion du geste et des cartes
- `style.css` : styles

## Tests

```bash
npm test
```

Les tests lisent le tableau `questions` de `script.js` et vérifient que chaque question a un effet entier et borné sur les cinq jauges, qu'il n'y a pas de doublon et qu'aucune jauge ne va toujours dans le même sens.

Démo : https://reigns-prototype.vercel.app/
