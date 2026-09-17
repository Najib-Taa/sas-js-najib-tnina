/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MÉTHODE D'OBJET (THIS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet compteBancaire avec une propriété solde et une méthode deposer(montant). La méthode doit utiliser this.solde pour augmenter le solde actuel.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day07/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function creerCompteBancaire() {
    const compteBancaire = {
        solde: 0,
        deposer(montant) {
             this.solde += montant;
        }
    };
    return compteBancaire;
} 

const mon_compte = creerCompteBancaire();
console.log(" Montant initial :", mon_compte.solde);

mon_compte.deposer(500);
console.log(" Montant final :", mon_compte.solde);
