/**
 * Auteur : CARDINAL Florian
 * Date   : 22/03/2020 18:16
 * Page   : credit.js
 */

"use strict";

/**
 * Importation des modules
 */
import Tools from "/scripts/tools.js";

/**
 * logger more infor about me
 */
export default function credit() {
	let output = "";
	let content = {
		msg: [
			"FullStack Developer\n",
			"front-end skills: Html5 / Css3 / Js / Twig\n",
			"back-end skills: Php7 / Sql / MySQL / Python\n\n",
			"front-end technology: Angular 8, Bootstrap (Responsive Design) & JQuery\n",
			"back-end technology: Symfony, Doctrine, Fixture, phpBB, PhpMyAdmin & NodeJS\n\n",
			"mastery of Windows & Linux environments,\n",
			"favorite IDEs: Atom, VSCode.\n\n",
			"prefer Agile method with a Git environment to work efficiently and optimally.\n\n",
			"very good team spirit, attentive to details and cooperative, ensuring total success for any web project.\n\n",
			"website developed by my own !\n\n\n"
		],
		pageInfo: [
			"page info :\n",
			`href\t\t: ${document.location.href}\n`,
			`protocol\t: ${document.location.protocol}\n`,
			`hostname\t: ${document.location.hostname}\n`,
			`pathname\t: ${document.location.pathname}\n`,
			`hash\t\t: ${document.location.hash}\n`,
			`title\t\t: ${document.title}\n`,
			`author\t\t: ${document.author}\n`,
			`author (alias)\t: ${document.authorAlias}\n`,
			`last refresh\t: ${document.lastModified}\n`
		]
	};

	for(let i = 0; i < Object.values(content).length; i++)
		for(let j = 0; j < Object.values(content)[i].length; j++) {
			output += Tools.capitalize(Object.values(content)[i][j]);

			if(!j)
				output += Tools.underliner(Object.values(content)[i][j]);
		}

	console.info(output);
}

/**
 * END
 */
