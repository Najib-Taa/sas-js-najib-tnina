# 🔎 Jour 07 — Recherche

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

> Quelle est la différence entre la notation pointée (`objet.propriete`) et la notation crochets (`objet["propriete"]`) ? Quand est-il obligatoire d'utiliser les crochets ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La notation pointée (objet.propriete) est plus simple à lire mais nécessite de connaître le nom exact et fixe de la propriété. 



La notation crochets (objet["propriete"]) est plus puissante car elle permet d'utiliser des chaînes de caractères.

Il est obligatoire d'utiliser les crochets dans deux cas :

Si le nom de la propriété contient des espaces ou des caractères spéciaux (ex: panier["prix-total"]).

Si le nom de la propriété est dynamique, c'est-à-dire stocké dans une variable (ex: compte[id]).

---

### Question 02

> Que se passe-t-il si on tente d'accéder à une propriété qui n'existe pas dans un objet ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Si on tente d'accéder à une propriété qui n'existe pas, JavaScript ne bloque pas le code. Il retourne simplement la valeur undefined.

Exemple :

const user = { nom: "Najib" };
console.log(user.age); 
// Affiche : undefined

**Attention** : Tenter d'accéder à une sous-propriété d'une propriété inexistante (ex: user.adresse.ville) provoquera une erreur critique (TypeError) qui fera planter le programme.


---

### Question 03

> Comment ajouter une nouvelle propriété à un objet déjà existant ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Pour ajouter une nouvelle propriété à un objet existant, il suffit de cibler l'objet, d'écrire le nom de la nouvelle propriété **(via la notation pointée ou crochets)** et de lui assigner une valeur avec **l'opérateur =.**

Exemple :

const user = { nom: "Najib" };
user.age = 20;          // Notation pointée
user["role"] = "Admin"; // Notation crochets


---

### Question 04

> Comment supprimer une propriété d'un objet (mot-clé spécifique) ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Pour supprimer définitivement une propriété d'un objet en JavaScript, on utilise le mot-clé spécifique **delete** suivi du chemin de la propriété.

Exemple : 


const client = { nom: "Najib", role: "Admin" };

delete client.role;    // Supprime la propriété 'role'

console.log(client);   // Affiche seulement : { nom: "Najib" }

---

### Question 05

> Quelle est la boucle spécifique recommandée pour parcourir les *clés* d'un objet ? (`for...of` ou `for...in`) ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La boucle spécifique recommandée pour parcourir les clés d'un objet est for...in.

Explication :

**for...in** parcourt les clés (propriétés) d'un objet.
**for...of** est réservée aux structures itérables comme les tableaux (Arrays) et provoquera une erreur critique si elle est utilisée sur un objet classique.

Exemple :

const user = { nom: "Najib", age: 20 };

for (let cle in user) {
    console.log(cle); // Affiche : nom, puis age
}

---

### Question 06

> Qu'est-ce que le mot-clé `this` lorsqu'il est utilisé à l'intérieur d'une méthode (une fonction) d'un objet ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

À l'intérieur d'une méthode d'un objet, le mot-clé **this** fait référence à l'objet lui-même (l'objet courant) qui possède et exécute cette méthode.

Il permet à la méthode d'accéder dynamiquement aux autres propriétés du même objet sans avoir à nommer explicitement l'objet en dur.


Exemple :

const utilisateur = {
    nom: "Najib",
    age: 20,

     saluer: function() {
         console.log(`Bonjour, je m'appelle ${this.nom}`);
    }
};

utilisateur.saluer();
// resultat : Bonjour, je m'appelle Najib



---

### Question 07

> Qu'est-ce que le format **JSON** (JavaScript Object Notation) par rapport à un objet JavaScript classique ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le format **JSON** (JavaScript Object Notation) est un format de données textuel (une chaîne de caractères) utilisé pour stocker et échanger des données entre un serveur et une application, tandis qu'un objet 
JavaScript est une structure vivante en mémoire RAM.

**Les principales différences sont :**

En JSON, les clés et les chaînes de caractères doivent obligatoirement être entourées de guillemets doubles ("").

Le JSON ne peut pas contenir de fonctions (méthodes), il ne contient que des données brutes (textes, nombres, booléens, tableaux).

La syntaxe JSON est beaucoup plus stricte (pas de virgule traînante à la fin du dernier élément).


EXEMPLE :
 
**un objet JavaScript classique**

const utilisateur = {
    nom: "Najib",
     age: 20,
    saluer: function() { ... }
};

**le format JSON**

{
    "nom": "Najib",
    "age": 20
}



---

### Question 08

> Quelle méthode native permet de convertir un objet JS en chaîne JSON (String) ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode native qui permet de convertir un objet JavaScript en chaîne de caractères JSON (String) est **JSON.stringify()**.

Exemple :

const user = { nom: "Najib", age: 20 };
const jsonString = JSON.stringify(user); 

console.log(jsonString); 

                      // Affiche : '{"nom":"Najib","age":20}'


Cette méthode est essentielle pour sérialiser les données avant de les envoyer à un serveur via le réseau.

---

### Question 09

> Quelle méthode native permet de convertir une chaîne JSON en objet JS ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La méthode native qui permet de convertir une chaîne de caractères JSON en un objet JavaScript utilisable est **JSON.parse()**.

Exemple :

const jsonString = '{"nom":"Najib","age":20}';
const userObject = JSON.parse(jsonString);

console.log(userObject.nom); 
                            // Affiche : Najib


Cette méthode est indispensable pour transformer (désérialiser) les données textuelles reçues d'un serveur afin de pouvoir les manipuler en JavaScript.                            


---

### Question 10

> Comme les tableaux, les objets sont assignés par "référence". Que cela signifie-t-il si vous faites `const obj2 = obj1;` et que vous modifiez `obj2` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

L'assignation par référence signifie que obj1 et obj2 pointent vers la même adresse en mémoire RAM. 
Il n'y a pas de copie créée.
Si on modifie une propriété de obj2, le changement sera immédiatement visible sur obj1 car les deux variables partagent le même objet unique.

Exemple :

const obj1 = { score: 100 };
const obj2 = obj1;
obj2.score = 500;

console.log(obj1.score); // Affiche : 500



## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [x] J'ai noté les notions que je dois encore clarifier.
