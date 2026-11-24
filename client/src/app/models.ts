/**
 * Types du contenu du CV (voir data.ts)
 */

export interface Network {
	name: string;
	title: string;
	link: string;
}

export interface Skill {
	id: string;
	title: string;
	/** pourcentage 0-100 */
	status: number;
}

export interface Experience {
	entity: string;
	job: string;
	period: string;
	/** HTML */
	description: string;
}

export interface Formation {
	date: number;
	entity: string;
	/** HTML */
	title: string;
	/** HTML */
	description: string;
	link: string | null;
}

export interface PortfolioItem {
	name: string;
	title: string;
	url: string;
	image: string;
}

export interface PortfolioCategory {
	key: string;
	items: PortfolioItem[];
}

export interface Cv {
	network: Network[];
	skills: Skill[];
	experiences: Experience[];
	formations: Formation[];
	portfolio: PortfolioCategory[];
}

export interface ContactRequest {
	name: string;
	fname: string;
	mail: string;
	tel: string;
	msg: string;
}

export type ContactField = keyof ContactRequest;
