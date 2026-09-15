/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function chiffrerCesar(texte, decalage) {
    let resultat = "";
    for (let i = 0; i < texte.length; i++) {
        let code = texte.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            resultat += String.fromCharCode(((code - 65 + decalage) % 26) + 65);
        }
        else if (code >= 97 && code <= 122) {
            resultat += String.fromCharCode(((code - 97 + decalage) % 26) + 97);
        }
         else {
            resultat += texte[i];
        }
    }
    return resultat;
}

console.log(chiffrerCesar("ABC", 1));
    
