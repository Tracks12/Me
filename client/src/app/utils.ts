/**
 * Auteur : CARDINAL Florian
 * Date   : 24/03/2020 21:05
 * Outils génériques
 */

/** met en majuscule la première lettre */
export function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/** vérifie que x est compris entre min et max (inclus) */
export function range(x: number, min: number, max: number): boolean {
	return (x - min) * (x - max) <= 0;
}

/** souligne une chaîne pour la console */
export function underliner(data: string): string {
	return `${[...data].map((c) => (c === ' ' || c === '\n' ? c : '-')).join('')}\n`;
}

export const pad = (n: number): string => n.toString().padStart(2, '0');

/** largeur en dessous de laquelle l'affichage passe en mode mobile */
export const MOBILE_WIDTH = 720;

export const isMobile = (): boolean => window.innerWidth < MOBILE_WIDTH;
