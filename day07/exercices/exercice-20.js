/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day07/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function demontrerClonage() {
     // 1. Création de l'objet original avec un autre objet imbriqué (adresse)
    const original = {
        nom: "Najib",
        adresse: { ville: "Nador" } // Objet imbriqué
    };

    // 2. Clonage superficiel (Shallow Copy) avec le Spread Operator (...)
    const copie = { ...original };

    // 3. Modification de l'objet imbriqué dans la copie
    copie.adresse.ville = "Rabat";

    // 4. Affichage pour prouver que l'original a AUSSI été modifié
    console.log("Original après modification :", original.adresse.ville);
    // Cela va afficher "Rabat" parce que les deux objets partagent la même référence.

    /*
     * EXPLICATION :
     * Le Spread Operator (...) effectue une copie superficielle (Shallow Copy).
     * Il copie les valeurs du premier niveau, mais pour les objets imbriqués
     * comme 'adresse', il ne copie que le lien de référence.
     * Donc, modifier la copie modifie également l'original.
     * 
     * SOLUTION MODERNE :
     * Pour faire une copie profonde (Deep Copy) 100% isolée et indépendante,
     * il faut utiliser la fonction moderne : const vraieCopie = structuredClone(original);
    */
    // 5. Solution moderne pour une copie profonde et sécurisée
    const copieProfonde = structuredClone(original);
    return { original, copieSurface: copie, copieProfonde };
}


demontrerClonage();