# 🔎 Jour 02 — Recherche

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

> Quelle est la différence d'usage principale entre une boucle `for` et une boucle `while` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.  

On utilise la boucle "for" lorsqu'on connaitre le nombre de repetion a fair. On contre partie on utilise la boucle while quand on connait pas le nombre de repetition et l'action doit continuer tant que la condition reste vraie 
exemple:
for : je envois 5 email
while : je cours 1 km tant qu'il ne pleut pas.

---

### Question 02

> À quoi sert la boucle `do...while` et en quoi diffère-t-elle de `while` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.  

La boucle `do...while` sert à répéter un bloc de code tant qu'une condition est vraie. Sa différence principale avec la boucle `while` est qu'elle s'exécute au moins une fois, car la condition est vérifiée à la fin du tour et non au début.

Exemple simple :
 `while` : Je vérifie s'il y a de la soupe dans mon assiette, puis je mange. (Si l'assiette est vide, je ne mange jamais).
 `do...while` : Je mange d'abord une première cuillère de soupe, puis je regarde s'il en reste pour continuer. (Je mange au moins une cuillère, même si l'assiette était presque vide).


---

### Question 03

> Que se passe-t-il si vous oubliez d'incrémenter ou de modifier la condition d'arrêt dans une boucle `while` ? Comment appelle-t-on ce problème ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Si on oublie d'incrémenter ou de modifier la condition d'arrêt, la condition reste traviller pour l'infinie. Le programme va alors exécuter le code sans une finie, ce qui va bloquer l'ordinateur. 

Exemple simple :
Si j'oublie d'écrire : compteur++;
Le programme va afficher "Je tourne..." à l'infini et va planter.

---

### Question 04

> À quoi sert le mot-clé `break` à l'intérieur d'une boucle ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le mot-clé `break` sert à arrêter immédiatement l'exécution d'une boucle et à en sortir, même si la condition de départ est encore vraie. 

**Exemple simple :**
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Arrête la boucle immédiatement quand i vaut 5
    }
    console.log(i); // Affichera uniquement : 1, 2, 3, 4
}
```


---

### Question 05

> À quoi sert le mot-clé `continue` à l'intérieur d'une boucle ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le mot-clé `continue` sert à sauter (ignorer) le reste du code de la boucle pour le tour actuel, et à passer directement au tour suivant. Contrairement à `break`, il n'arrête pas la boucle entière.

**Exemple simple :**
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Saute le reste du code uniquement pour le chiffre 3
    }
    console.log(i); // Affichera : 1, 2, 4, 5 (le 3 est sauté)
}
```



---

### Question 06

> Dans la structure `for(initialisation; condition; incrémentation)`, dans quel ordre exact ces trois parties sont-elles exécutées ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

L'ordre d'exécution exact d'une boucle `for` est le suivant :

Initialisation : Le compteur est créé (une seule fois au début).
Condition : Le processeur vérifie si le score est bon pour entrer.
Le corps de la boucle : Le code à l'intérieur des `{ }` est exécuté.Incrémentation : Le compteur augmente de +1 à la toute fin du tour, puis on retourne à l'étape 2.


---

### Question 07

> Est-il possible de déclarer la variable d'initialisation en dehors de la boucle `for` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui c'est possible on peut declarer la variable d'initialisation en dehors de la boucle `for`mais on dois garder la point virgule ";"

Exemple:
let i = 1
for (; i <= 3; i++)
---

### Question 08

> Qu'est-ce qu'une boucle imbriquée (nested loop) et quand en avons-nous besoin ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Une boucle imbriquée est une boucle a l'interieur d'une autre boucle. On le besoin lorsqu'on a des plusieur données variable et grillées a des dimentions
Exemple:(boucle d'heure)
La grande boucle change l'heure de 12:00 a 13:00 si et seulement si la petite boucle a fait une tour complete de 60 minutes

---

### Question 09

> Quel est le risque majeur en termes de performances lorsqu'on utilise de multiples boucles imbriquées ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le risque majeur est le ralentissement ou le bloque d'ordinateur (le processeur) a cause de l'explosion du nombre totale des opérations 

Exemple simple:
Si une liste contient 100 éléments :
 1 boucle simple fait 100 opérations.
 2 boucles imbriquées font 100 x 100 = 10 000 opérations.
 3 boucles imbriquées font 100 x 100 x 100 = 1 000 000 d'opérations

---

### Question 10

> Peut-on utiliser un `switch` à l'intérieur d'une boucle ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui il est possible d'utiliser un `switch` à l'intérieur d'une boucle, surtout quand on est besoin de séparer des actions différents selon la valeur de l'element actuel à chaque tour de la boucle.
Exemple:(cas d'une télécomande)

const bouton = "2"; 

switch (bouton) {
    case "1":
        console.log("chaine n°1");
        break; 
        
    case "2":
        console.log("chaine n°2");
        break; 
        
    case "3":
        console.log("chaine n°3");
        break; 
        
    default:
        console.log("chaine non supporter");
}







## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [x] J'ai noté les notions que je dois encore clarifier.
