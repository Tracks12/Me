/**
 * Auteur : CARDINAL Florian
 * Date   : 22/03/2020 18:16
 * Page   : credit.js
 */

function credit() {
	let output = "";
	let content = {
		msg: Array(
			"Développeur Web Junior full stack\n",
			"----------- --- ------ ---- -----\n\n",
			"Front-end skills: Html5 / Css3 / Js / Twig\n",
			"Back-end skills: Php7 / Sql / MySQL / Python\n\n",
			"Front-end technology: Angular 8, Bootstrap (Responsive Design) & JQuery\n",
			"Back-end technology: Symfony, Doctrine, Fixture, phpBB, PhpMyAdmin & NodeJS\n\n",
			"Mastery of Windows & Linux environments,\n",
			"Favorite IDEs: Atom, VSCode.\n\n",
			"Preferably opts for the Agile method with a Git environment to work efficiently and optimally.\n\n",
			"Very good team spirit, attentive to details and cooperative, ensuring total success for any web project.\n\n",
			"Website developed by my own !\n\n"
		),
		pageInfo: Array(
			"Page Info :\n",
			"---- ---- -\n",
			`href\t\t: ${document.location.href}\n`,
			`protocol\t: ${document.location.protocol}\n`,
			`hostname\t: ${document.location.hostname}\n`,
			`pathname\t: ${document.location.pathname}\n`,
			`hash\t\t: ${document.location.hash}\n`,
			`title\t\t: ${document.title}\n`,
			`author\t\t: ${document.author}\n`,
			`author (alias)\t: ${document.authorAlias}\n`,
			`last modified\t: ${document.lastModified}\n`
		)
	}

	for(let i = 0; i < content.msg.length; i++)
		output += content.msg[i];

	for(let i = 0; i < content.pageInfo.length; i++)
		output += content.pageInfo[i];

	console.info(output);
}

/**
 * END
 */
