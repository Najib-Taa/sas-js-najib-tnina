/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * LE FILTRE À INSULTES / CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Créez une fonction filtrerMessage(message) qui reçoit le message tapé par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit être remplacé par des astérisques de la même longueur (ex: "").
 * 4. Retournez le message censuré.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> Résultat attendu : "Tu es vraiment un GROS  et un * !!"
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
function filtrerMessage(message) {
    const motsInterdits = ["noob", "idiot", "nul"];
    const pattern = new RegExp(motsInterdits.join("|"), "gi");
    const messageCensure = message.replace(pattern, function(mot_trouvee) {
        return "*".repeat(mot_trouvee.length);
    });

    return messageCensure;
}

console.log(filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!"));
console.log(filtrerMessage("Tu es vraiment un GROS NooB et un idiot ton niveau est très nul !!"));
