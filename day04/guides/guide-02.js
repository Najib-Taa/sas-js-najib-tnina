/**
 * JOUR 03 — GUIDE 02
 * Comprendre la Portée (Scope)
 *
 * OBJECTIF
 * Essayez de déclarer une variable à l'intérieur d'une fonction, et essayez de l'afficher console.log() à l'extérieur de la fonction. Que se passe-t-il ?
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

function test () {
    let x = 10;

}
console.log(x);
// une variable déclarée avec 'let' dans une fonction est accessible seulement à l'intérieur de cette fonction lui meme, elle n'est pas accessible à l'extérieur.