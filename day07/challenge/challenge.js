/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day07/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let utilisateurs = [];
let prochainId = 1;

function ajouterUtilisateur(nom, email) {
    const nouvelUtilisateur = {
        id: prochainId++,
        nom: nom,
        email: email
    };
    utilisateurs.push(nouvelUtilisateur);
    return nouvelUtilisateur;
} 
function trouverParEmail(email) {
    for (let utilisateur of utilisateurs) {
        if (utilisateur.email === email) {
            return utilisateur;
        }
    }
    return null;

}

function supprimerParId(id) {
    utilisateurs = utilisateurs.filter(utilisateur => utilisateur.id !== id);
}

function afficherAnnuaire() {
    console.log("=== LISTE DE L'ANNUAIRE ===");
     if (utilisateurs.length === 0) {
        console.log("L'annuaire est complètement vide.");
    } else {
        for (let u of utilisateurs) {
            console.log(`[ID: ${u.id}] | Nom: ${u.nom} | Email: ${u.email}`);
        }
    }
    console.log("==============================");
}



ajouterUtilisateur("Najib", "najib@email.com");
ajouterUtilisateur("Sara", "sara@email.com");

console.log("Vérification du répertoire après l'ajout de Najib et Sarah :");
afficherAnnuaire();

console.log("Tentative de recherche de l'e-mail de Najib :");
console.log(trouverParEmail("najib@email.com"));

console.log("Test de suppression de compte n° 1 (Najib) ");
supprimerParId(1);
afficherAnnuaire();



