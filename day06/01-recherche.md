# 🔎 Jour 06 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> En JavaScript, le premier élément d'un tableau se trouve à quel index ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

En JavaScript, le premier élément d'un tableau se trouve toujours à l'index 0, car l'ordinateur commence à compter à partir de zéro.

Exemple:

const villes = ["Nador", "Casablanca", "Safi"];
// "Nador" se trouve à l'index 0

---

### Question 02

> Quelle est la différence entre les méthodes `.push()` et `.unshift()` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode .push() ajoute un ou plusieurs éléments à la fin d'un tableau, tandis que la méthode .unshift() ajoute des éléments au début du tableau.


---

### Question 03

> Quelle est la différence entre `.pop()` et `.shift()` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode .pop() supprime le DERNIER élément d'un tableau, alors que la méthode .shift() supprime le PREMIER élément du tableau.


---

### Question 04

> Que retourne la propriété `.length` d'un tableau vide `[]` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La propriété .length d'un tableau vide [] retourne le nombre 0, car le tableau ne contient aucun élément.


---

### Question 05

> Quelle est la différence entre une boucle `for...in` et une boucle `for...of` ? Laquelle est recommandée pour parcourir les *valeurs* d'un tableau ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La boucle `for...in` parcourt les INDEX (clés) d'un tableau, tandis que la boucle `for...of` parcourt directement les VALEURS du tableau. Pour récupérer les valeurs d'un tableau, il est fortement recommandé d'utiliser `for...of`.
 
Exemple:

const villes = ["Nador", "Casablanca", "Safi"];

for (let index in villes) {
    console.log(index); 
}
// resultat : 0, 1, 2

for (let ville of villes) {
    console.log(ville);
}
// resultat : Nador, Casablanca, Safi

---

### Question 06

> Comment vérifier si une variable est bien un tableau (puisque `typeof []` renvoie `"object"`) ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Puisque `typeof` renvoie `"object"` pour un tableau, il faut utiliser la méthode native `Array.isArray(variable)`. Elle retourne `true` si la variable est un tableau, et `false` sinon.

Exemple:

Pour le cas de `typeof` :

const villes = ["Nador", "Safi"];
const etudiant = { nom: "Najib" };
console.log(typeof villes); // resultat : object
console.log(typeof etudiant);  // resultat : object

Pour le cas de `Array.isArray(variable)` :

const villes = ["Nador", "Safi"];
const etudiant = { nom: "Najib", age: 20 }; 
console.log(Array.isArray(villes));// resultat : true
console.log(Array.isArray(etudiant)); // resultat : false

---

### Question 07

> Quelle méthode utiliseriez-vous pour fusionner deux tableaux en un seul ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Pour fusionner deux tableaux, on peut utiliser la méthode native `.concat()`, ou la syntaxe moderne du Spread Operator (`...`).

Exemple:

const amis1 = ["Najib", "Omar"];
const amis2 = ["Yassine", "Amine"];

//   Methode 1 (.concat)
const tousLesAmis1 = amis1.concat(amis2);
console.log(tousLesAmis1); // [ 'Najib', 'Omar', 'Yassine', 'Amine' ]

//   Methode 2 (...)
const tousLesAmis2 = [...amis1, ...amis2];
console.log(tousLesAmis2); // [ 'Najib', 'Omar', 'Yassine', 'Amine' ]

---

### Question 08

> Quelle est la différence entre `.slice()` et `.splice()` lors de la manipulation d'un tableau ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode `.slice()` extrait une partie d'un tableau et retourne un NOUVEAU tableau SANS modifier le tableau d'origine. En revanche, la méthode `.splice()` MODIFIE directement le tableau d'origine en supprimant, remplaçant ou ajoutant des éléments.

Exemple:

// 1. EXEMPLE AVEC .slice() 



const fruitsOriginal = ["Orange", "Banane", "Pomme", "Fraise"];

const portionExtraite = fruitsOriginal.slice(1, 3);

console.log(portionExtraite); // Résultat : ["Banane", "Pomme"]
console.log(fruitsOriginal);   // Résultat : ["Orange", "Banane", "Pomme", "Fraise"] (Pas modifié )


// 2. EXEMPLE AVEC .splice() 



const listeFruits = ["Orange", "Banane", "Pomme", "Fraise"];
const elementsSupprimes = listeFruits.splice(1, 2);

console.log(elementsSupprimes); // Résultat : ["Banane", "Pomme"]
console.log(listeFruits);       // Résultat : ["Orange", "Fraise"] (Le tableau d'origine a changé )


---

### Question 09

> Les tableaux en JavaScript sont-ils passés par *valeur* ou par *référparence* lorsqu'ils sont assignés à une nouvelle variable ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

En JavaScript, les tableaux sont passés par RÉFÉRENCE. Lorsqu'on assigne un tableau à une nouvelle variable, on ne crée pas une copie du tableau, mais on copie son adresse en mémoire. Ainsi, modifier le nouveau tableau modifiera également le tableau d'origine.

Exemple :

1-Cas d'une valeurs :

let score1 = 100;
let score2 = score1;
score2 = 50;

console.log(score2); // Résultat : 50
console.log(score1); // Résultat : 100

2-Cas d'une reférence :

const fruits1 = ["Orange", "Banane"];
const fruits2 = fruits1;

fruits2.push("Pomme");

console.log(fruits2); // Résultat : ["Orange", "Banane", "Pomme"]
console.log(fruits1); // Résultat : ["Orange", "Banane", "Pomme"]

---

### Question 10

> Peut-on stocker des types différents dans un même tableau en JS (ex: nombres, strings, booléens en même temps) ? Est-ce une bonne pratique ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui, il est techniquement possible de stocker des types différents dans un même tableau en JavaScript.
Cependant, ce n'est PAS une bonne pratique, car cela rend le code imprévisible et difficile à maintenir. Il est recommandé de garder les tableaux homogènes (un seul type de données) et d'utiliser des objets pour les structures de données mixtes.

Exemple :

 1-la mauvaise pratique :

 const tableauMixte = [20, "Najib", true, [1, 2]]; 


2-la bonne pratique :

const listeEtudiants = ["Najib", "Omar", "Yassine"];
const notes = [12, 16, 14];
// Et ainsi de suite ....




## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [x] J'ai noté les notions que je dois encore clarifier.
