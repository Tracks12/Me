/**
 * Auteur : CARDINAL Florian
 * Date   : 22/03/2020 18:16
 * Logger d'informations dans la console
 */
import { capitalize, underliner } from './utils';

export function credit(): void {
	const content = {
		msg: [
			'Développeur Web Junior full stack\n',
			'front-end skills: Html5 / Css3 / Js / Twig\n',
			'back-end skills: Php7 / Sql / MySQL / Python\n\n',
			'front-end technology: Angular, Bootstrap (Responsive Design)\n',
			'back-end technology: Symfony, Doctrine, Fixture, phpBB, PhpMyAdmin & NodeJS\n\n',
			'mastery of Windows & Linux environments,\n',
			'favorite IDEs: Atom, VSCode.\n\n',
			'preferably opts for the Agile method with a Git environment to work efficiently and optimally.\n\n',
			'very good team spirit, attentive to details and cooperative, ensuring total success for any web project.\n\n',
			'website developed by my own !\n\n\n',
		],
		pageInfo: [
			'page info :\n',
			`href\t\t: ${document.location.href}\n`,
			`protocol\t: ${document.location.protocol}\n`,
			`hostname\t: ${document.location.hostname}\n`,
			`pathname\t: ${document.location.pathname}\n`,
			`hash\t\t: ${document.location.hash}\n`,
			`title\t\t: ${document.title}\n`,
			`author\t\t: CARDINAL Florian\n`,
			`author (alias)\t: Anarchy\n`,
			`last refresh\t: ${document.lastModified}\n`,
		],
	};

	let output = '';

	for (const lines of Object.values(content))
		lines.forEach((line, i) => {
			output += capitalize(line);
			if (!i) output += underliner(line);
		});

	console.info(output);
}
