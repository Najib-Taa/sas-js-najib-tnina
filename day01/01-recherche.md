# 🔎 Jour 01 — Recherche

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

> Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?

[x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

const: stocke une valeur fixe qui ne change jamais. let: s'utilise pour une valeur qui va changer. var: est une ancienne méthode obsolète à éviter.


---

### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

les 7 types primitifs de données représentent les valeurs les plus simples et fondamentales. Ils sont immuables (on ne peut pas les modifier directement) 
string: const texte = "YouCode";
number:const age = 25;


---

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ? 

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

 typeof null renvoie la valeur "object" . C'est un bug informatique créé en 1995 à cause d'une confusion dans le code binaire de l'époque. Cette erreur n'a jamais été corrigée pour éviter de casser les anciens sites internet de la planète.
const donnees = null;
console.log(typeof donnees); 
---



### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

(Égalité souple) : Compare uniquement les valeurs. Si les types sont différents, JavaScript convertit automatiquement l'un des éléments avant de faire le test.  (Égalité stricte) : Compare à la fois la valeur et le type de donnée. Aucune conversion n'est tolérée. Si les types diffèrent, le résultat est immédiatement faux

const nombre = 10;
const texte = "10";

console.log(nombre == texte);  // Affiche: true  (Car la valeur est identique)
console.log(nombre === texte); // Affiche: false (Car un Number n'est pas un String)


---

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :  

> À compléter avec mes propres mots.


Si vous essayez de changer la valeur d'une variable déclarée avec const, JavaScript bloque immédiatement l'exécution et affiche une erreur de type TypeError
const prenom = "Najib";

prenom = "Amine"; 
// Erreur : TypeError: Assignment to constant variable.

---

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

En JavaScript, lorsqu'on additionne un nombre et une chaîne de caractères (ex: 5 + "5"), le moteur transforme automatiquement le nombre en texte, puis colle les deux éléments ensemble. Ce phénomène s'appelle la coercition de type (ou conversion implicite) et entraîne une concaténation plutôt qu'une addition mathématique. 
const resultat = 5 + "5";

console.log(resultat); 
resultat: "55"



---

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique.

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

l'opérateur modulo % sert à calculer le reste d'une division entière (division euclidienne) entre deux nombres. Plutôt que de donner le résultat décimal d'une division, il indique ce qu'il reste après avoir regroupé les nombres équitablement.

const reste = 10 % 3; 

console.log(reste); // Affiche : 1

---

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

&& (ET logique) : Exige que toutes les conditions soient vraies en même temps. Si une seule condition est fausse, tout s'écroule.|| (OU logique) : Exige qu'au moins une des conditions soit vraie. Il est beaucoup plus tolérant.

const carteInvitation = true;
const tenueCorrecte = false;

// Test avec && (Très strict)
console.log(carteInvitation && tenueCorrecte); 
// Résultat : false (Il manque la tenue correcte )

// Test avec || (Tolérant)
console.log(carteInvitation || tenueCorrecte); 
// Résultat : true (L'invitation suffit pour entrer )


---

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui, il est tout à fait possible d'utiliser une condition switch à la place d'une série de if / else if. En JavaScript, ces deux structures permettent de contrôler le flux d'exécution du code en fonction de conditions spécifiques.

L'utilisation du switch est recommandée dans les scénarios suivants:

Comparaison d'une seule variable : Lorsque vous devez tester la valeur d'une seule et unique variable par rapport à plusieurs options constantes distinctes.

Grand nombre de choix : Si vous avez plus de 3 ou 4 blocs else if à la chaîne, le switch offre une structure visuelle beaucoup plus propre, lisible et facile à maintenir. 

Valeurs fixes et précises : Quand les valeurs testées sont des nombres, des chaînes de caractères claires ou des énumérations précises.

Option A : Avec une chaîne de if / else if
const role = "admin";

if (role === "admin") {
    console.log("Accès total accordé.");
} else if (role === "modérateur") {
    console.log("Accès modération accordé.");
} else {
    console.log("Accès limité.");
}


Option B : Avec un switch (Plus propre)
const role = "admin";

switch (role) {
    case "admin":
        console.log("Accès total accordé.");
        break;
    case "modérateur":
        console.log("Accès modération accordé.");
        break;
    default:
        console.log("Accès limité.");
}







---

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

une valeur "falsy" (ou fausse) est une valeur qui est automatiquement convertie en le booléen false lorsqu'elle est évaluée dans un contexte conditionnel (comme une structure if).Voici 3 exemples classiques de valeurs "falsy" :0 : Le chiffre zéro (ainsi que -0 et 0n en BigInt)."" : Une chaîne de caractères vide (sans aucun texte ni espace).null : L'absence volontaire de valeur.

const score = 0; 

if (score) {
    console.log("Le score est valide.");
} else {
    console.log("Ce bloc s'exécute car 0 est falsy !");
}




## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [x] J'ai noté les notions que je dois encore clarifier.
