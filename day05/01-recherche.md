# 🔎 Jour 05 — Recherche

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

> En JavaScript, une chaîne de caractères (String) est-elle "mutable" (modifiable) ou "immuable" (immutable) ? Que cela implique-t-il quand on utilise `.toUpperCase()` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

En JavaScript, une chaîne de caractères est immuable. Cela signifie qu'elle ne peut pas être modifiée directement en mémoire après sa création. Quand on utilise .toUpperCase(), la chaîne d'origine reste inchangée : la méthode crée et retourne une nouvelle chaîne entièrement en majuscules.

exemple:

let txt = "a";
 txt.toUpperCase(); 
 // txt reste "a". Il faut écrire txt = txt.toUpperCase(); pour sauvegarder le changement.


---

### Question 02

> Quelle est la différence entre `.slice()`, `.substring()` et `.substr()` ? Lequel est considéré comme déprécié ou moins recommandé ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

.slice(start, end) extrait de l'index début à l'index fin (non inclus) et accepte les indices négatifs pour compter depuis la fin. 

.substring(start, end) fait la même chose mais traite les négatifs comme 0 et inverse les arguments si début > fin. 

.substr(start, length) prend la position de départ et le nombre de caractères à extraire. La méthode .substr() est considérée comme dépréciée

Exemple:

let text = "JavaScript";

console.log(text.slice(0, 4));     // Affiche: "Java" (de l'index 0 à l'index 4)
console.log(text.substring(0, 4)); // Affiche: "Java" (de l'index 0 à l'index 4)
console.log(text.substr(0, 4));    // Affiche: "Java" (commence à 0 et extrait 4 caractères)

// Différence lors du changement d'ordre des chiffres:

console.log(text.slice(4, 0));     // Affiche une chaîne vide "" car le début est supérieur à la fin
console.log(text.substring(4, 0)); // Affiche "Java" car la méthode inverse automatiquement les arguments pour faire (0, 4)
console.log(text.slice(-5));       // Affiche "Script" car elle commence le compte à rebours depuis la fin de 5 positions
---

### Question 03

> Quelle méthode permet de transformer la chaîne `"A,B,C"` en un tableau `["A", "B", "C"]` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode qui permet de transformer la chaîne "A,B,C" en un tableau ["A", "B", "C"] est .split(","). Elle utilise la virgule comme séparateur pour découper la chaîne et stocker chaque élément dans un nouveau tableau.

Exemple:

let chaine = "A,B,C";
let tableau = chaine.split(","); // Extraction et découpage

console.log(tableau); // Affiche: ["A", "B", "C"]


---

### Question 04

> Quelle est la différence entre `.indexOf()` et `.search()` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---

La méthode .indexOf() cherche une chaîne de caractères fixe et permet de spécifier un index de départ pour la recherche. 
La méthode .search() est plus puissante car elle permet de chercher un motif à l'aide d'une expression régulière (Regex), mais elle commence toujours sa recherche au début de la chaîne et n'accepte pas d'index de départ.


### Question 05

> À quoi servent les **Template Literals** (les backticks `` ` ``) par rapport aux simples quotes `'` ou doubles `"` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Les Template Literals (les backticks) permettent de créer des chaînes de caractères plus lisibles et puissantes.
Elles offrent deux avantages majeurs par rapport aux quotes simples ou doubles :

l'interpolation directe de variables ou d'expressions à l'aide de ${expression} (évitant l'utilisation répétée du signe +),
et la possibilité d'écrire des textes sur plusieurs lignes naturellement sans utiliser le caractère d'échappement \n.

---

### Question 06

> Comment vérifier de manière moderne si une chaîne *commence* par un mot spécifique ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La manière moderne de vérifier si une chaîne commence par un mot spécifique est d'utiliser la méthode .startsWith(). 
Elle renvoie true si la chaîne commence par le texte recherché, sinon elle renvoie false. 
Elle est sensible à la casse (majuscules/minuscules).

Exemple:

let phrase = "JavaScript est magnifique";

console.log(phrase.startsWith("Java")); 
// Affiche: true (car la phrase commence par "Java")

console.log(phrase.startsWith("java"));
// Affiche: false (car le 'j' est minuscule)


---

### Question 07

> Quelle méthode permet d'enlever les espaces vides au début et à la fin d'une chaîne, mais pas au milieu ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode qui permet d'enlever les espaces vides au début et à la fin d'une chaîne sans toucher à ceux du milieu est .trim().

Exemple:

let texteFormulaire = "   Najib Tnina   ";

let texteNettoye = texteFormulaire.trim();

console.log(texteNettoye); 
// Affiche: "Najib Tnina" (sans espaces au début ni à la fin)


---

### Question 08

> Quelle est la différence de comportement entre `.replace("a", "b")` et `.replaceAll("a", "b")` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode `.replace("a", "b")` remplace uniquement la première apparence du caractère `"a"` par `"b"`. En revanche, la méthode `.replaceAll("a", "b")` remplace toutes les apparences du caractère `"a"` présentes dans la chaîne de caractères.

Exemple:

let phrase = "banana";

console.log(phrase.replace("a", "o"));    // Affiche: "bonana"

console.log(phrase.replaceAll("a", "o")); // Affiche: "bonono"

---

### Question 09

> Qu'est-ce qu'une Expression Régulière (Regex) et pourquoi l'utilise-t-on avec les strings ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Une Expression Régulière (Regex) est un motif ou un modèle (pattern) décrit à l'aide de caractères spéciaux. On l'utilise avec les strings pour effectuer des recherches complexes, valider des formats de données (comme un e-mail ou un numéro de téléphone), ou nettoyer et remplacer des chaînes de caractères de manière beaucoup plus puissante et flexible qu'avec du texte fixe.

Exemple:

let text = "Mon numéro est 0612345678";

let contientChiffres = /[0-9]/.test(text); 

console.log(contientChiffres); // Affiche: true

---

### Question 10

> Peut-on utiliser la propriété `.length` sur une chaîne vide `""` ? Quel sera le résultat ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui, on peut tout à fait utiliser la propriété .length sur une chaîne vide "". Le résultat sera toujours 0, car la propriété compte le nombre de caractères présents, et une chaîne vide n'en contient aucun.

Exemple:

let chaineVide = "";
console.log(chaineVide.length); 
// Affiche: 0


## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [x] J'ai noté les notions que je dois encore clarifier.
