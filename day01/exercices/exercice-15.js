/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * NETTOYAGE DE SCRAPING MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez extrait d'un site e-commerce la chaîne suivante : . Utilisez des méthodes de base (que vous pouvez chercher, ex: trim, replace) pour ne garder que "349.99" et convertissez-le en type Number. Calculez ensuite le prix total pour 2 articles.
 *
 * RÉSULTAT ATTENDU
 * 699.98 (de type Number)
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day01/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const prixextrait = "349.99 MAD";
const prixnettoyer = prixextrait.trim().replace("MAD","").trim();
const prixtotale = Number(prixnettoyer)*2;
console.log(prixtotale);

