# 🔎 Jour 03 — Recherche

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

> Quelle est la différence entre un *paramètre* et un *argument* d'une fonction ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le paramètre c'est une boite vide ou un espace réservé
L'argument est le contenu que l'on met dans la boite

Exemple:
//etape 1: la declaration du paramètre
function saluer(nom; age) {
    console.log(`Bonjour ${nom}, tu as ${age} ans.`);
}
//etape 2: on appel l'argument
saluer("Said", 20);

---

### Question 02

> Quelle est la différence entre l'instruction `return` et `console.log()` dans une fonction ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

console.log: sert a afficher juste une information visuelle
return: il permet de stocker l'information ou de l'utuliser dans un autre calcul

---

### Question 03

> Que se passe-t-il si l'on oublie le mot-clé `return` dans une fonction censée renvoyer une valeur ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Si on oublie le mot clé "return" la fonction renvoie automatiquement la valeur 'udefined'

Exemple:
function calculer () {
    let x = 5 + 5;
    //on dois ecrire ici: return x;
}
let resultat = calculer();
// le resultat est 'undefined'


---

### Question 04

> Qu'est-ce que la **portée (scope)** des variables en JavaScript ? Une variable définie dans une fonction avec `let` est-elle accessible à l'extérieur ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La portée ou le scope en anglais est la zone dans laquelle une variable peut étre utilisée.
une variable déclarée avec 'let' dans une fonction est accessible seulement à l'intérieur de cette fonction lui meme, elle n'est pas accessible à l'extérieur.

Exemple:
function test () {
    let x = 10;
    console.log(x); // cette methode est vrai
}
console.log(x); // cette methode est faux


---

### Question 05

> Quelle est la syntaxe d'une **fonction fléchée** (arrow function) par rapport à une fonction classique ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Une fonction fléchée (arrow function) est une façon plus rapide pour ecrire une fonction en javascript. Elle utilise le symbole => au lieu du mot clé function.
Exemple:

// Fonction classique
 function addition(a, b) {
     return a + b;
} 


// Fonction fléchée
const addition = (a, b) => {
     return a + b; 
     };

---

### Question 06

> Dans quel cas peut-on omettre les accolades `{}` et le mot-clé `return` dans une fonction fléchée ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

On peut omettre les accolades `{}` et le mot-clé `return` dans une fonction fléchée lorsqu’elle contient une seule instruction qui retourne une valeur. Dans ce cas, la valeur est retournée automatiquement.

Exemple :

```javascript
// Avec les accolades et return
const carré = (x) => {
    return x * x;
};

// Sans les accolades et return
const carré = (x) => x * x;
```

Les deux fonctions donnent le même résultat.


---

### Question 07

> Qu'est-ce que le *Hoisting* (hissage) en JavaScript, et comment s'applique-t-il aux fonctions classiques `function nom()` versus les variables `const maFunc = () => {}` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le Hoisting (hissage) est un comportement de JavaScript qui permet de traiter certaines déclarations avant l’exécution du code.

Une fonction classique déclarée avec `function` peut être appelée avant sa déclaration.

**Exemple :**

```javascript
bonjour();

function bonjour() {
    console.log("Bonjour");
}
```

Cela fonctionne.


**Exemple :**

```javascript
bonjour();

const bonjour = () => {
    console.log("Bonjour");
};
```

Cela ne fonctionne pas.


---

### Question 08

> Qu'est-ce qu'une fonction **Callback** ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---

### Question 09

> Peut-on donner une valeur par défaut à un paramètre (ex: `function saluer(nom = "Invité")`) ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---

### Question 10

> Qu'est-ce que la *récursivité* en programmation ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
